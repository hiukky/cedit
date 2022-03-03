export type Events = {
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
  autoFocus?: boolean
  onKeyUp?(data: Maybe<'key'>): void
  onKeyDown?(data: Maybe<'key'>): void
  onKeyPress?(data: Maybe<'key'>): void
  onBlur?(data: Maybe<'focus'>): void
  onFocus?(data: Maybe<'focus'>): void
  onChange?(data: Maybe<'form'>): void
}