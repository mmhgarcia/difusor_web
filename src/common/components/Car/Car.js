import styles from './car.module.css';

function getText(){
  let text = "Soy la funcion Car!";
  return text;
}

const Car = () =>{
  return <div className={styles.setcolor}>{getText()}</div>;
}

export default Car;