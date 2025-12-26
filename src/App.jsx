import { useState } from 'react'
import Header from './components/Header'
import ColorColumn from './components/ColorColumn'
import {nanoid} from 'nanoid'
import './App.css'

function App() {
  const [schemeColors, setSchemeColors] = useState(["#000000", "#ffffff", "#000000", "#ffffff", "#000000"])

  const colorElements = schemeColors.map((element) => 
    <ColorColumn
      key={nanoid()}
      hex={element}
    />
  )

  return (
    <>
      <Header 
        setSchemeColors={setSchemeColors}
      />

      <main>
        {colorElements}
      </main>

      {/* <span className='material-symbols-outlined'>
        check
      </span>
      <span className='material-symbols-outlined'>
        content_copy 
      </span> */}
    </>
  )
}

export default App