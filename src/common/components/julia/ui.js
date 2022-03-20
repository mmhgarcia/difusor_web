import styles from './ui.module.css';
import imagen from '../../../assets/playa.jpeg';

function adjust(){

  var ua = navigator.userAgent || navigator.vendor || window.opera || window.chrome;
  //console.log("ua ok");

  var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
  //console.log("isInstagram", isInstagram);

  if (document.documentElement.classList) {

    if (isInstagram) {

      alert("desde instagram");

      //falta validar que sea desde un mobile *******

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;

      // Set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      //OK
      document.getElementsByClassName("imagen")[0].style.border = "10px solid red";

      //prueba
      document.getElementsByClassName("imagen")[0].style.marginTop = 5 + "vh";

      //imagen.classList.add("instagram");  

    }

  }

}


function TopMenu(){
  
  return (
    <div id="host">
      TOP MENU
    </div>
  );
}


function Pie() {

  adjust();

  return (
    <div className={styles.pie}>
      Pie*
    </div> 
  );
}


const Ui = () =>{
  
  return(    
    <>

      <div className={styles.padre}>

        <div className={styles.menu}>
          <TopMenu />          
        </div>

        <div className={styles.imagen}>
          <img src={imagen} alt="" className="imagen"/>
        </div>

        <Pie />

      </div>
      
    </>
  )
}

export default Ui;