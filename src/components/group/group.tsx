import { useLayoutEffect, useRef } from 'react'

import { GroupProps } from './types'

export const Group: React.FC<GroupProps> = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const editors = Array.from(
      ref.current?.querySelectorAll('div[data-cedit="true"]') || []
    )

    const focusableEditor = editors
      .filter(editor => editor.getAttribute('data-autofocus') === 'true')
      .map(editor => editor.firstChild as HTMLDivElement)
      .at(-0)

    if (focusableEditor) {
      focusableEditor.focus()
    }
  }, [])

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  )
}
