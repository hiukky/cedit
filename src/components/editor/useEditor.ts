import React from 'react'

import { Events, Maybe } from './types'

export const useEditor = (node: React.RefObject<HTMLDivElement>) => {
  const get = <E extends keyof Events>(event: Events[E]): Maybe<E> => {
    const target = event.target as HTMLDivElement

    return {
      event,
      html: target.innerHTML ?? '',
      text: target.innerText ?? ''
    }
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

  return {
    append,
    focus,
    blur,
    empty,
    get
  }
}
