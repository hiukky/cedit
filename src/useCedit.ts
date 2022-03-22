import { caretRangeFromPoint } from './utils'
import { Events, Maybe } from './types'

export const useCedit = (node: React.RefObject<HTMLDivElement>) => {
  const get = <E extends keyof Events>(event: Events[E]): Maybe<E> => {
    const target = event.target as HTMLDivElement

    let text = target.innerText ?? ''
    let html = target.innerHTML ?? ''

    if (event.type === 'paste') {
      const clip = event as Maybe<'clip'>['event']

      text = clip.clipboardData?.getData('text/plain') ?? ''
      html = clip.clipboardData?.getData('text/html') ?? ''
    }

    return { event, html, text }
  }

  const blur = (): void => {
    node.current?.blur()
  }

  const focus = (): void => {
    node.current?.focus()
  }

  const empty = (): void => {
    if (node.current) {
      node.current.innerHTML = ''
      node.current.innerText = ''
    }
  }

  const append = (data: string): void => {
    if (node.current) {
      node.current.innerHTML = data
    }
  }

  const setCaret = (): void => {
    if (node.current) {
      const selection = window.getSelection()
      const range = document.createRange()

      selection?.removeAllRanges()
      range.selectNodeContents(node.current)
      range.collapse(false)
      selection?.addRange(range)

      if (document.activeElement !== node.current) {
        focus()
      }
    }
  }

  const moveCaretOn = (
    event: React.MouseEvent<HTMLDivElement>,
    autofocus?: boolean
  ): void => {
    const isAllowed =
      (event.target as HTMLDivElement).firstChild === node.current

    if (isAllowed) {
      event.preventDefault()

      const selection = window.getSelection()
      const range = caretRangeFromPoint(event.clientX, event.clientY)

      if (range) {
        selection?.removeAllRanges()
        selection?.addRange(range)

        if (autofocus) {
          focus()
        }
      }
    }
  }

  return {
    moveCaretOn,
    setCaret,
    append,
    focus,
    blur,
    empty,
    get
  }
}
