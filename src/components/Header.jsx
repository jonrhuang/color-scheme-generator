import {useRef, useState} from 'react'
import {clsx} from 'clsx'
import {getScheme} from '/src/utils/getScheme'
import styles from './Header.module.css'

function Header(props) {

  const [schemeErr, setSchemeErr] = useState(false)
  const [selectedColor, setSelectedColor] = useState("#000000")
  const colorInputRef = useRef(null)

  function schemeChange() {
    setSchemeErr(false)
  }

  async function formSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const scheme = formData.get("colorScheme")

    if (!scheme) {
      setSchemeErr(true)
      return
    }

    // api call
    // will need set... state from parent:w
    const colorApiRes = await getScheme(selectedColor.replace("#", ""), scheme)

    let colorHex = []
    colorApiRes.forEach(element => {
      colorHex.push(element.hex.value)
    });
    props.setSchemeColors(colorHex)
  }

  function colorBoxClick() {
    colorInputRef.current.click()
  }

  function colorChange(e) {
    setSelectedColor(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={formSubmit}>
          <label htmlFor='colorInput'>Color:</label>
          <input id='colorInput' className={styles.colorPickerHide} type='color' ref={colorInputRef} onChange={colorChange}></input>
          <button className={`${styles.button} ${styles.colorBox}`} onClick={colorBoxClick} type='button' style={{backgroundColor: selectedColor}}></button>
          <select name='colorScheme' className={clsx({[styles.missingInput]: schemeErr})} onChange={schemeChange}>
            <option value=''>Select Scheme</option>
            <option value='monochrome'>Monochrome</option>
            <option value='monochrome-dark'>Monochrome-dark</option>
            <option value='monochrome-light'>Monochrome-light</option>
            <option value='analogic'>Analogic</option>
            <option value='complement'>Complement</option>
            <option value='analogic-complement'>Analogic-complement</option>
            <option value='triad'>Triad</option>
          </select>
          <button type='submit' className={styles.button}>Get color scheme</button>
        </form>
      </header>
    </>
  )
}

export default Header