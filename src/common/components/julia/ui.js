import styles from './ui.module.css';
//import imagen from '../../../assets/playa.jpeg';

//let UrlImg = 'https://www.juliamicelipitta.com/imagen/CoverJulia.jpg';
let urlimagen = 'https://www.juliamicelipitta.com/imagen/CoverJuliaMovil.png';

function isInstagramMobile(){
  
  let ua = navigator.userAgent || navigator.vendor || window.opera || window.chrome;

  let isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;

  let screenWidth = window.screen.width;

  let isMobil = (screenWidth < 801) ? true : false;

  let _isInstagramMobile = false;

  if (document.documentElement.classList) {

    if (isInstagram) {

      if(isMobil){

        _isInstagramMobile = true;

      }

    }

    return _isInstagramMobile;

  }
}

function Ui(){

  let _isInstagramMobile = isInstagramMobile();

  return(
    <div className={styles.padre}>
      <div className={styles.imagen}>        
        {
          _isInstagramMobile ? 
            <div>
              <img src={urlimagen} alt="" className="clsimagen" style={{ marginTop: "7vh" }} />      
            </div> 
          : 
            <div>
              <img src={urlimagen} alt="" className="clsimagen" />
            </div>
          
        }
      </div>
    </div>
  )

}



export default Ui;