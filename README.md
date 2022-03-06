<div align="center">
  <img alt="cedit logo" src="https://github.com/hiukky/cedit/raw/main/assets/banner.png"/>
</div>

<p align="center">
  <a href="https://github.com/hiukky/cedit/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/hiukky/cedit?color=151A20&style=for-the-badge&colorA=0d1117">
  </a>
  <a href="https://github.com/hiukky/cedit/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/hiukky/cedit?color=151A20&style=for-the-badge&colorA=0d1117">
  </a>
  <a href="https://github.com/hiukky/cedit/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/hiukky/cedit?style=for-the-badge&color=151A20&colorA=0d1117">
  </a>
  <a href="httdivs://github.com/hiukky/cedit/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/hiukky/cedit?color=151A20&style=for-the-badge&colorA=0d1117" />
  </a>
</p>

<p align="center">
  <sub>Built with ❤︎ by <a href="https://hiukky.com">hiukky</a>
  <br/>
</p>

<br>

# About

Cedit is a component for react that uses the [Content Editable](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Editable_content) feature for free editing of content within an HTML element. It is light and minimalist and aims to make the most of this wonderful resource in a clean and performative way.

<br>

# Motivation

The `content editable` is an excellent and super useful feature that I needed to implement many times but I always faced some basic usage problems such as caret positioning, etc. And even with some components in the community implementing this feature, the same issues still exist! The objective of this implementation is to skip this step and deliver a simple component, at the same time powerful and with the basic functioning expected.

<br>

# Installation

Cedit is a lightweight package with 0 dependencies.

<br>

### Using NPM

```sh
npm i cedit
```

### Using Yarn

```sh
yarn add cedit
```

<br>

# Use

The component has a simple interface, you can import the `CeditProps` interface for better specification.

All handlers return a value of type `Maybe<HTMLDivElement>` with keys `text`, `html` and `event`.

<br>

## Cedit

You can check a practical example in [Demo](https://hiukky.github.io/cedit/).

<br>

```tsx
import { useState } from 'react'
import { Cedit, CeditProps, Maybe } from 'cedit'

const App: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Cedit
      value={value}
      placeholder="Type here..."
      onChange={({ text, html, event }) => setValue(html)}
    />
  )
}
```

<br>

## Provider

If you want to control more than one editor, you can use `CeditProvider` to wrap all components and take advantage of features like autofocus. For now the provider does not offer extra features, but it will be implemented in the future.

<br>

```tsx
import { Cedit, CeditProps, CeditProvider, Maybe } from 'cedit'

const App: React.FC = () => {
  return (
    <CeditProvider>
      {/* Editors */}
    <CeditProvider>
  )
}
```

<br>

| Property    | Type     | Description                                                                                                                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string   | Specifies a unique id for an HTML element.                                                                                                                                      |
| value       | string   | Can be plain text or html.                                                                                                                                                      |
| spellCheck  | boolean  | Spell check.                                                                                                                                                                    |
| editable    | boolean  | Enable editing when focusing on component                                                                                                                                       |
| className   | string   | CSS class for styling. By default no styles are defined for the component, only resets basic settings.                                                                          |
| placeholder | string   | A small tip, phrase, word, which is intended to help the user understand how to fill out that form.                                                                             |
| autoFocus   | boolean  | If enabled, the element receives focus automatically when displayed.                                                                                                            |
| placement   | string   | Editable content centering, the accepted values are: `topStart`, `topCenter`, `topEnd`, `middleStart`, `middleCenter`,`middleEnd`,`bottomStart`,`bottomCenter` and `bottomEnd`. |
| onKeyUp     | Maybe[T] | The keyup event fires when a key is released.                                                                                                                                   |
| onKeyDown   | Maybe[T] | The keydown event is fired when a key is pressed.                                                                                                                               |
| onKeyPress  | Maybe[T] | The onkeypress event occurs when the user presses a key.                                                                                                                        |
| onBlur      | Maybe[T] | The onblur event occurs when an object loses focus.                                                                                                                             |
| onFocus     | Maybe[T] | The onfocus event occurs when an element gets focus.                                                                                                                            |
| onChange    | Maybe[T] | The onchange event occurs when the value of an element has been changed.                                                                                                        |
| onPaste     | Maybe[T] | The onpaste event occurs when the user pastes some content in an element.                                                                                                       |

<br>

# Style

The component has no predefined styling, but exposes two main classes that you can use to style.

```css
/* Container */
.cedit {
}

/* Content */
.cedit__content {
}
```

<br>

# Contributing

Cedit is in an initial version without many features yet, but you can feel free to send your suggestion or open a PR.

<br>

<div align="center">
<a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/hiukky">
<img width="250" alt="buy me a coffee" src="https://github.com/hiukky/cedit/raw/main/assets/coffe.svg"/>
</a>
</div>

<br>

<div align="center">
<a href="https://github.com/hiukky/cedit/blob/master/LICENSE">
<img alt="GitHub license" src="https://img.shields.io/github/license/hiukky/cedit?color=1F2630&style=for-the-badge&colorA=1F2630" />
</a>
</div>
