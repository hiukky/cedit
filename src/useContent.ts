import React from 'react'

import { Events, Maybe } from './types'

export const useContent = (ref: React.RefObject<HTMLDivElement>) => {
  const get = <E extends keyof Events>(event: Events[E]): Maybe<E> => {
    const target = event.target as HTMLDivElement

    return {
      event,
      html: target.innerHTML ?? '',
      text: target.innerText ?? ''
    }
  }

  const set = (value: string): void => {
    if (ref.current) {
      ref.current.innerHTML = value
    }
  }

  const focus = (): void => {
    if (ref.current) {
      const selection = window.getSelection()
      const range = document.createRange()

      selection?.removeAllRanges()
      range.selectNodeContents(ref.current)
      range.collapse(false)
      selection?.addRange(range)
      ref.current.focus()
    }
  }

  const empty = (): void => {
    if (ref.current) {
      ref.current.innerHTML = ''
      ref.current.innerText = ''
    }
  }

  return {
    focus,
    empty,
    get,
    set
  }
}
