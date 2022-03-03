import { render } from '@testing-library/react'

import { Content } from './content'

describe('Content', () => {
  it('should have hello world value', () => {
    const { getByText } = render(<Content value="Hello world!" />)

    expect(getByText('Hello world!')).toMatchInlineSnapshot(`
      <div
        class="cedit"
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
      <Content placeholder="placeholder..." value="" />
    )

    expect(getByPlaceholderText('placeholder...')).toMatchInlineSnapshot(`
      <div
        class="cedit"
        contenteditable="true"
        placeholder="placeholder..."
        role="textbox"
        spellcheck="false"
        tabindex="0"
      />
    `)
  })
})
