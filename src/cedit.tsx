import React, { useEffect, useRef } from 'react'

import { CeditProps } from './types'
import { useCedit } from './useCedit'
import { CLEAR_FIX, PLACEMENT } from './constants'

export const Cedit: React.FC<CeditProps> = ({
  id,
  value,
  editable = true,
  multiLine = true,
  spellCheck = false,
  className = '',
  placeholder,
  autoFocus = false,
  placement = 'topStart',
  style = {},
  onChange = () => ({}),
  onFocus = () => ({}),
  onBlur = () => ({}),
  onKeyUp = () => ({}),
  onKeyDown = () => ({}),
  onKeyPress = () => ({}),
  onPaste = () => ({})
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const contentRef = useRef({
    value,
    editable: false
  })

  const { get, append, setCaret, empty, blur, moveCaretOn } = useCedit(ref)

  useEffect(() => {
    if (ref.current && contentRef.current) {
      if (!contentRef.current.editable) {
        append(value)
      }

      if (CLEAR_FIX.includes(value as typeof CLEAR_FIX[number])) {
        empty()
      }
    }
  }, [append, empty, value])

  return (
    <div
      data-cedit
      data-autofocus={autoFocus}
      role="presentation"
      className={`cedit ${PLACEMENT[placement]} ${className}`.trim()}
      style={{
        ...style,
        cursor: editable ? 'text' : 'default',
        outlineColor: editable ? '' : 'transparent'
      }}
      onClick={event => moveCaretOn(event, true)}
      onMouseDown={event => moveCaretOn(event)}
      onBlur={() => {
        contentRef.current.editable = false
        blur()
      }}
      onFocus={() => {
        contentRef.current.editable = true
        setCaret()
      }}
    >
      <div
        id={id?.toString()}
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
        onKeyDown={event => {
          if (event.key === 'Enter' && !multiLine) {
            event.preventDefault()
          }

          onKeyDown(get(event))
        }}
        onKeyPress={event => onKeyPress(get(event))}
        onBlur={event => {
          contentRef.current.editable = false
          onBlur(get(event))
        }}
        onFocus={event => {
          contentRef.current.editable = true
          setCaret()
          onFocus(get(event))
        }}
        onPaste={event => {
          setCaret()
          onPaste(get(event))
        }}
      />
    </div>
  )
}
