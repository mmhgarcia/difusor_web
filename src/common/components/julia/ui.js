import styles from './ui.module.css';
import imagen from '../../../assets/playa.jpeg';

function ajuste(){
  
  let ua = navigator.userAgent || navigator.vendor || window.opera || window.chrome;

  let isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

  if (document.documentElement.classList) {

    if (isInstagram) {

      //falta validar que sea desde un mobile *******

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;


      // Set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      //prueba
      //let _image = document.getElementsByClassName("clsimagen")[0];

      //_image.style .margin = "5vh 0 0 0";

      //document.querySelector(".clsimagen").style.setProperty("margin", "50vh 0 0 0");

      //imagen.classList.add("instagram");  

      //styles.instagram.marginTop="70vh";

    }

    return isInstagram;

  }
}

function Ui(){

  let isInstagram = ajuste();

  return(
    <div className={styles.padre}>
      <div className={styles.imagen} style={{ marginTop: isInstagram ? "5vh" : "0vh" }}>
        <img src={imagen} alt="" className="clsimagen" />
      </div>
    </div>
  )

}

export default Ui;