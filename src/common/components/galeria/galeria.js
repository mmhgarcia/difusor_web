import React from 'react'
import styles from './galeria.module.css';

const imagenes=[   
  "./playa.jpeg",
  "./playa2.jfif",
  "./playa3.jfif",
  "./playa4.jpeg",
  "./playa5.jpg",
  "./playa6.jpeg",
  "./playa.jpeg",
  "./playa2.jfif",
  "./mountain.jpg",
  "./playa3.jfif",
  "./playa4.jpeg",
  "./playa5.jpg",
  "./playa6.jpeg",
  "./playa.jpeg",
  "./playa2.jfif",
  "./playa3.jfif",
  "./playa4.jpeg",
  "./mountain.jpg",
  "./playa5.jpg",
  "./playa6.jpeg"
]

function Galeria() {
  return (
    <>      
      <div className={styles.container}>
        {
          imagenes.map((child, i) => {
            return  (
              <div key={i}>
                <img src={"images/" + child} alt="OK" />
              </div>
            )
          })
        }
      </div>            
    </>
  )
}

export default Galeria;