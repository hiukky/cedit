// @ts-nocheck

function getShadowRoots(node: Node, roots: ShadowRoot[] = []): ShadowRoot[] {
  let iter: Node | Element | ShadowRoot | null = node

  while (iter.parentNode || iter.host) {
    if (iter instanceof ShadowRoot) {
      roots.push(iter)
      iter = iter.host!
      continue
    }

    iter = iter.parentNode!
  }

  return roots
}

export function caretRangeFromPoint(x: number, y: number): Range {
  if (document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(x, y)

    if (position) {
      const range = document.createRange()

      let { offsetNode } = position

      const shadowRoots = getShadowRoots(offsetNode)

      if (shadowRoots.length) {
        offsetNode = shadowRoots[shadowRoots.length - 1].host!
      }

      range.setStart(offsetNode, position.offset)
      range.setEnd(offsetNode, position.offset)

      return range
    }

    return null
  }

  return document.caretRangeFromPoint(x, y)
}
