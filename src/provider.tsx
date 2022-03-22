import React, { createContext, useEffect, useRef } from 'react'

export const CeditContext = createContext({})

export const CeditProvider: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
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

  return <div ref={ref}>{children}</div>
}
