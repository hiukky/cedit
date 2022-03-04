import React, { useEffect, useRef } from 'react'

import { ContentProps } from './types'
import { useContent } from './useContent'
import { CLEAR_FIX, PLACEMENT } from './constants'

export const Content: React.FC<ContentProps> = ({
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder,
  autoFocus = true,
  placement = 'topStart',
  onChange = () => ({}),
  onFocus = () => ({}),
  onBlur = () => ({}),
  onKeyUp = () => ({}),
  onKeyDown = () => ({}),
  onKeyPress = () => ({})
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const contentRef = useRef({
    value,
    editable: false
  })

  const { get, append, focus, empty } = useContent(ref)

  useEffect(() => {
    if (ref.current && contentRef.current) {
      if (autoFocus && editable && document.activeElement !== ref.current) {
        focus()
      }

      if (!contentRef.current.editable) {
        append(value)
      }

      if (CLEAR_FIX.includes(value as typeof CLEAR_FIX[number])) {
        empty()
      }
    }
  }, [value, empty, autoFocus, editable, focus, append])

  return (
    <div
      role="presentation"
      className={`cedit ${PLACEMENT[placement]} ${className}`.trim()}
      onBlur={() => {
        contentRef.current.editable = false
        ref.current?.blur()
      }}
      onClick={() => {
        contentRef.current.editable = true
        ref.current?.focus()
      }}
    >
      <div
        ref={ref}
        role="textbox"
        tabIndex={0}
        contentEditable={editable}
        spellCheck={spellCheck}
        className="cedit__content"
        placeholder={placeholder}
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{
          __html: contentRef.current.value
        }}
        onInput={event => onChange(get(event))}
        onKeyUp={event => onKeyUp(get(event))}
        onKeyDown={event => onKeyDown(get(event))}
        onKeyPress={event => onKeyPress(get(event))}
        onBlur={event => {
          contentRef.current.editable = false
          onBlur(get(event))
        }}
        onFocus={event => {
          contentRef.current.editable = true
          focus()
          onFocus(get(event))
        }}
      />
    </div>
  )
}
