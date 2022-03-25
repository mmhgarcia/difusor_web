// https://blog.logrocket.com/best-practices-react-iframes/

//import * as containerStyles from "./container.module.css"
import styles from './ui.module.css';

function Ui(){

  return(
    
    <div className={styles.marco}>
      <iframe title="visor" src="https://www.juliamicelipitta.com" width="100%" height="100%"></iframe>
    </div>
        
  )

}

export default Ui;
