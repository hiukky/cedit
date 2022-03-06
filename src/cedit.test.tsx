import { render } from '@testing-library/react'

import { Cedit } from './cedit'

describe('Cedit', () => {
  it('should have hello world value', () => {
    const { getByText } = render(<Cedit value="Hello world!" />)

    expect(getByText('Hello world!')).toMatchInlineSnapshot(`
      <div
        class="cedit__content"
        contenteditable="true"
        role="textbox"
        spellcheck="false"
        tabindex="0"
      >
        Hello world!
      </div>
    `)
  })

  it('should have a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Cedit placeholder="placeholder..." value="" />
    )

    expect(getByPlaceholderText('placeholder...')).toMatchInlineSnapshot(`
      <div
        class="cedit__content"
        contenteditable="true"
        placeholder="placeholder..."
        role="textbox"
        spellcheck="false"
        tabindex="0"
      />
    `)
  })
})
