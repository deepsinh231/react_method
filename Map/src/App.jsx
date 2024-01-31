import React from 'react'
import { MapE } from './Main_Fun/MapE.jsx'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function App() {
  const Name = [
    { id: 1, title: "button item" },
    { id: 2, title: "button item" },
    { id: 3, title: "button item" },
    { id: 4, title: "button item" },
    { id: 5, title: "button item" },
    { id: 6, title: "button item" },
    { id: 7, title: "button item" },
    { id: 8, title: "button item" },
  ]
  return (
    <>
      <div className="w-961 py-8">
        <MapE of={Name} render={(item, index) =>
          <button
            type="button"
            className="block w-full cursor-pointer rounded-lg p-4 text-center transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
            {item.id} button item
          </button>} />
        <SyntaxHighlighter className="rounded-5 ad" language="jsx" style={atomOneDarkReasonable}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

const codeString = `
import React from 'react'
import { MapE } from './Main_Fun/MapE.jsx'

export default function App() {
  const Name = [
    { id: 1, title: "button item" },
    { id: 2, title: "button item" },
    { id: 3, title: "button item" },
    { id: 4, title: "button item" },
    { id: 5, title: "button item" },
    { id: 6, title: "button item" },
    { id: 7, title: "button item" },
    { id: 8, title: "button item" },
  ]
  return (
    <>
      <div className="w-961 py-8">
        <MapE of={Name} render={(item, index) =>
          <button
            type="button"
            className="block w-full cursor-pointer rounded-lg p-4 
            text-center transition duration-500 hover:bg-neutral-100
            hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 
            focus:ring-0 dark:hover:bg-neutral-600
            dark:hover:text-neutral-200
            dark:focus:bg-neutral-600
            dark:focus:text-neutral-200">
            {item.id} button item
          </button>} />
      </div>
    </>
  )
}

{ MapE } from './Main_Fun/MapE.jsx'

import { Children } from 'react'
export const MapE = ({ render, of }) => Children.toArray(of.map((item, index) => render(item, index)))

`