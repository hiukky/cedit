import { Story, Meta } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import { Content } from './content'
import { ContentProps } from './types'

const Wrapper = Object.assign(
  styled.div`
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background: #0d1117;
    color: #fff;
    padding: 20px;
    border-radius: 10px;

    .cedit {
      padding: 6px;
      margin-top: 10px;
      border: 2px solid gray;
      min-height: 50px;
    }

    span {
      font-size: 0.9rem;
      color: #318df7;
    }
  `,
  {
    Editor: styled.div`
      min-height: 80px;
      margin-bottom: 20px;
    `,

    Preview: styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px 0;

      span {
        display: inline-flex;
        margin-bottom: 20px;
        color: #31f794;
      }
    `
  }
)

export default {
  title: 'Content Editor',
  component: Content,
  argTypes: {
    value: {
      control: {
        disable: true
      }
    },
    placeholder: {
      control: {
        disable: true
      }
    }
  }
} as Meta

const Template: Story<ContentProps> = args => {
  const [value, setValue] = useState({
    text: args.value || '',
    html: args.value || ''
  })

  const [editable, setEditable] = useState(false)

  return (
    <Wrapper>
      <Wrapper.Editor>
        <span>Editor</span>
        <Content {...args} value={value.text} onChange={setValue} />
      </Wrapper.Editor>

      <Wrapper.Preview>
        <div>
          <span>Preview Text</span>
          <div>{value.text}</div>
        </div>

        <div>
          <span>Preview HTML</span>
          <Content
            placeholder="Preview"
            value={value.html}
            editable={editable}
            onFocus={() => setEditable(true)}
            onBlur={() => setEditable(false)}
          />
        </div>
      </Wrapper.Preview>
    </Wrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type here...'
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  placeholder: 'Type here...',
  value: 'Hello world!',
  autoFocus: true
}