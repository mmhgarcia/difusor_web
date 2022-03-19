import styles from './ui.module.css';

const Ui = () =>{
  return(
    <>
      <div className={styles.padre}>

        <div className={styles.menu}>
          <span id="host">HOST</span>
        </div>

        <div className={styles.imagen}>
          <img src="./playa.jpeg" alt="" />
        </div>

        <div className={styles.pie}>
          Pie
        </div>

      </div>
    </>
  )
}

export default Ui;