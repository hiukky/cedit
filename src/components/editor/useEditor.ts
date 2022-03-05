import React from 'react'

import { caretRangeFromPoint } from './utils'
import { Events, Maybe } from './types'

export const useEditor = (node: React.RefObject<HTMLDivElement>) => {
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

  const append = (data: string): void => {
    if (node.current) {
      node.current.innerHTML = data
    }
  }

  const focus = (): void => {
    if (node.current) {
      const selection = window.getSelection()
      const range = document.createRange()

      selection?.removeAllRanges()
      range.selectNodeContents(node.current)
      range.collapse(false)
      selection?.addRange(range)

      if (document.activeElement !== node.current) {
        node.current.focus()
      }
    }
  }

  const blur = (): void => {
    node.current?.blur()
  }

  const empty = (): void => {
    if (node.current) {
      node.current.innerHTML = ''
      node.current.innerText = ''
    }
  }

  const moveCaretTo = (x: number, y: number): void => {
    const selection = window.getSelection()

    const range = caretRangeFromPoint(x, y)

    if (range) {
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }

  return {
    moveCaretTo,
    append,
    focus,
    blur,
    empty,
    get
  }
}
