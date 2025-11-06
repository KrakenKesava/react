import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherElement = <h2>Meow</h2>

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to go to Google!',
  anotherElement
)
  

createRoot(document.getElementById('root')).render(
  reactElement
//  <App />
)
