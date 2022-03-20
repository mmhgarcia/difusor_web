import styles from './ui.module.css';
import imagen from '../../../assets/playa.jpeg';

function test(){
  alert("*** TESTING ***");
}

const Ui = () =>{
  
  return(    
    
    <>
      <div className={styles.padre}>

        <div className={styles.imagen}>
          <img src={imagen} alt="" className="imagen"/>  
        </div>

        {test()}

      </div>
      
    </>
  )
}

export default Ui;