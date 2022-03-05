import { render } from '@testing-library/react'

import { Editor } from './editor'

describe('Editor', () => {
  it('should have hello world value', () => {
    const { getByText } = render(<Editor value="Hello world!" />)

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
      <Editor placeholder="placeholder..." value="" />
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
