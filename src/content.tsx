import { useEffect, useRef } from 'react'
import './styled.css'

export type ContentProps = {
  value: string
  spellCheck?: boolean
  editable?: boolean
  className?: string
  placeholder?: string
  onChange?(value: Record<'text' | 'html', string>): void
}

export const Content: React.FC<ContentProps> = ({
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder,
  onChange = () => ({})
}) => {
  const contentRef = useRef(value)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current && ['<br>', '\n', ''].includes(value)) {
      ref.current.innerHTML = ''
    }
  }, [value])

  return (
    <div
      ref={ref}
      className={`cedit ${className}`.trim()}
      placeholder={placeholder}
      contentEditable={editable}
      spellCheck={spellCheck}
      suppressContentEditableWarning
      onInput={event => {
        const target = event.target as HTMLDivElement

        return onChange({
          html: target.innerHTML ?? '',
          text: target.innerText ?? ''
        })
      }}
    >
      {contentRef.current}
    </div>
  )
}
