import { useState } from 'react'

import { Story, Meta } from '@storybook/react'

import styled from 'styled-components'

import { Cedit, CeditProps, CeditProvider } from '.'

const Container = styled.div`
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  color: #2f3542;

  .cedit {
    margin-top: 10px;
  }

  span {
    font-weight: bolder;
    font-size: 0.9rem;
  }
`

const Content = styled.div`
  min-height: 80px;
  margin-bottom: 20px;
`

const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
  gap: 20px;

  .cedit {
    border: none;
  }

  span {
    display: inline-flex;
    margin-bottom: 20px;
  }
`

export default {
  title: 'Cedit Editor',
  component: Cedit,
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

const Template: Story<CeditProps> = args => {
  const [value, setValue] = useState({
    text: args.value || '',
    html: args.value || ''
  })

  const [editable, setEditable] = useState(false)

  return (
    <CeditProvider>
      <Container>
        <Content>
          <span>Editor</span>
          <Cedit
            {...args}
            value={value.text}
            onChange={setValue}
            onPaste={setValue}
          />
        </Content>

        <Preview>
          {['text', 'html'].map((type, idx) => (
            <div key={type}>
              <span>Preview ({type.toUpperCase()})</span>
              <Cedit
                placeholder="Preview"
                value={value[type as keyof typeof value]}
                editable={!idx && editable}
                onFocus={() => setEditable(true)}
                onBlur={() => setEditable(false)}
              />
            </div>
          ))}
        </Preview>
      </Container>
    </CeditProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type here...',
  autoFocus: true
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  placeholder: 'Type here...',
  value: 'Hello world!',
  autoFocus: true
}
