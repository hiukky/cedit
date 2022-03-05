import React, { useEffect, useRef } from 'react'

import { ContentProps } from './types'
import { useEditor } from './useEditor'
import { CLEAR_FIX, PLACEMENT } from './constants'

export const Editor: React.FC<ContentProps> = ({
  id,
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder,
  autoFocus = false,
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

  const { get, append, focus, empty, blur, moveCaretTo } = useEditor(ref)

  useEffect(() => {
    if (ref.current && contentRef.current) {
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
      data-cedit
      data-autofocus={autoFocus}
      role="presentation"
      className={`cedit ${PLACEMENT[placement]} ${className}`.trim()}
      style={{
        cursor: editable ? 'text' : 'default'
      }}
      onMouseDown={event => {
        if ((event.target as HTMLDivElement).firstChild === ref.current) {
          event.preventDefault()
          moveCaretTo(event.clientX, event.clientY)
        }
      }}
      onBlur={() => {
        contentRef.current.editable = false
        blur()
      }}
      onFocus={() => {
        contentRef.current.editable = true
        focus()
      }}
    >
      <div
        id={id}
        ref={ref}
        role="textbox"
        tabIndex={editable ? 0 : -1}
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
