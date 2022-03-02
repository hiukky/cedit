import './styled.css'

export type ContentProps = {
  value: string
  spellCheck?: boolean
  editable?: boolean
  className?: string
  placeholder?: string
}

export const Content: React.FC<ContentProps> = ({
  value,
  editable = true,
  spellCheck = false,
  className = '',
  placeholder
}) => (
  <div
    className={`cedit ${className}`}
    placeholder={placeholder}
    contentEditable={editable}
    spellCheck={spellCheck}
    suppressContentEditableWarning
  >
    {value}
  </div>
)
