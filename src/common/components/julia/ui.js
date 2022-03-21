import styles from './ui.module.css';
//import imagen from '../../../assets/playa.jpeg';

//let UrlImg = 'https://www.juliamicelipitta.com/imagen/CoverJulia.jpg';
let urlimagen = 'https://www.juliamicelipitta.com/imagen/CoverJuliaMovil.png';

function fromInstagram(){
  
  let ua = navigator.userAgent || navigator.vendor || window.opera || window.chrome;

  let isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

  if (document.documentElement.classList) {

    if (isInstagram) {

      //falta validar que sea desde un mobile *******

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      //let vh = window.innerHeight * 0.01;


      // Set the value in the --vh custom property to the root of the document
      //document.documentElement.style.setProperty('--vh', `${vh}px`);

    }

    return isInstagram;

  }
}

function Ui(){

  let isInstagram = fromInstagram();

  return(
    <div className={styles.padre}>
      <div className={styles.imagen} >
        <img src={urlimagen} alt="" className="clsimagen" style={{ marginTop: isInstagram ? "7vh" : "0vh" }} />
      </div>
    </div>
  )

}

export default Ui;