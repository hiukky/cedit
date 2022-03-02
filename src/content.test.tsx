import { render } from '@testing-library/react'
import { Content } from './content'

describe('Content', () => {
  it('should have hello world message', () => {
    const { getByText } = render(<Content value="Hello world!" />)

    expect(getByText('Hello world!')).toMatchInlineSnapshot(`
      <div
        class="cedit"
        contenteditable="true"
        spellcheck="false"
      >
        Hello world!
      </div>
    `)
  })
})
