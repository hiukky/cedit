import React, { useEffect, useRef } from 'react'
import './styled.css'

type Events = {
  key: React.KeyboardEvent<HTMLDivElement>
  form: React.FormEvent<HTMLDivElement>
  focus: React.FocusEvent<HTMLDivElement>
}

export type Maybe<T extends keyof Events> = {
  text: string
  html: string
  event: Events[T]
}

export type ContentProps = {
  value: string
  spellCheck?: boolean
  editable?: boolean
  className?: string
  placeholder?: string
  onKeyUp?(data: Maybe<'key'>): void
  onKeyDown?(data: Maybe<'key'>): void
  onKeyPress?(data: Maybe<'key'>): void
  onBlur?(data: Maybe<'focus'>): void
  onFocus?(data: Maybe<'focus'>): void
  onChange?(data: Maybe<'form'>): void
}

export const Content: React.FC<ContentProps> = ({
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder,
  onChange = () => ({}),
  onFocus = () => ({}),
  onBlur = () => ({}),
  onKeyUp = () => ({}),
  onKeyDown = () => ({}),
  onKeyPress = () => ({})
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef(value)

  function get<E extends keyof Events>(event: Events[E]): Maybe<E> {
    const target = event.target as HTMLDivElement

    return {
      event,
      html: target.innerHTML ?? '',
      text: target.innerText ?? ''
    }
  }

  useEffect(() => {
    if (ref.current && ['<br>', '\n', ''].includes(value)) {
      ref.current.innerHTML = ''
    }
  }, [value])

  return (
    <div
      ref={ref}
      role="textbox"
      tabIndex={0}
      className={`cedit ${className}`.trim()}
      placeholder={placeholder}
      contentEditable={editable}
      spellCheck={spellCheck}
      suppressContentEditableWarning
      onBlur={event => onBlur(get(event))}
      onInput={event => onChange(get(event))}
      onFocus={event => onFocus(get(event))}
      onKeyUp={event => onKeyUp(get(event))}
      onKeyDown={event => onKeyDown(get(event))}
      onKeyPress={event => onKeyPress(get(event))}
    >
      {contentRef.current}
    </div>
  )
}
