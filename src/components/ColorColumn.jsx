import {useRef, useState} from 'react'
import styles from './ColorColumn.module.css'

function ColorColumn(props) {
  const hexRef = useRef(null)
  const [iconStatus, setIconStatus] = useState(false)

  function handleButtonClick() {
    const hex = hexRef.current.textContent
    navigator.clipboard.writeText(hex)
    setIconStatus(true)

    setTimeout(() => setIconStatus(false), 1000)
  }

  const style = {
    backgroundColor: props.hex
  }
  return(
    <>
      <section className={styles.color} style={style}>
      </section>
      <section className={styles.hex}>
        <span ref={hexRef}>
          {props.hex}
        </span>
        <button onClick={handleButtonClick} className={styles.button}>
          <span 
            className={`material-symbols-outlined 
                        ${styles.icon} 
                        ${styles.copy} 
                        ${!iconStatus ? styles.show : styles.hide}`} 
          >
            content_copy 
          </span>
          <span 
            className={`material-symbols-outlined 
                        ${styles.check} 
                        ${iconStatus ? styles.show : styles.hide}`}
          >
            check
          </span>
        </button>
      </section>
    </>
  )
}

export default ColorColumn 