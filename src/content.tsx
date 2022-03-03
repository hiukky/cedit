import { useEffect, useRef } from 'react'
import './styled.css'

import { ContentProps } from './types'

import { useContent } from './useContent'

export const Content: React.FC<ContentProps> = ({
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder,
  autoFocus = true,
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

  const { get, set, focus, empty } = useContent(ref)

  useEffect(() => {
    if (ref.current && contentRef.current) {
      if (autoFocus && editable && document.activeElement !== ref.current) {
        focus()
      }

      if (!contentRef.current.editable) {
        set(value)
      }

      if (['<br>', '\n', ''].includes(value)) {
        empty()
      }
    }
  }, [value, empty, autoFocus, editable, focus, set])

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
      dangerouslySetInnerHTML={{ __html: contentRef.current.value }}
      onBlur={event => {
        contentRef.current.editable = false
        onBlur(get(event))
      }}
      onFocus={event => {
        contentRef.current.editable = true
        onFocus(get(event))
      }}
      onInput={event => onChange(get(event))}
      onKeyUp={event => onKeyUp(get(event))}
      onKeyDown={event => onKeyDown(get(event))}
      onKeyPress={event => onKeyPress(get(event))}
    />
  )
}
