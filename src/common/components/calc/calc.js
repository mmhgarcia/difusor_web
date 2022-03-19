import styles from './calc.module.css';

const Calc = () =>{

  return(
    <div className={styles.calcBody}>
      <p className={styles.calcTitle}>
        Calculadora        
      </p>
      <span className={styles.labels}>
        Su peso
      </span>
      <br />
      <input type="text" className={styles.formControl}/>
      <br />
      <button className={styles.formControl}>Save</button>
    </div>
  );

}

export default Calc;