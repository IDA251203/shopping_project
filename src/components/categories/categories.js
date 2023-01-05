import React from 'react';
import styles from './index.module.sass';
import Carousel from 'better-react-carousel';
import img1 from './img/Rectangle 7.png';
import img2 from './img/Rectangle 9.png';
import img3 from './img/Rectangle 10.png';
import img4 from './img/Rectangle 11.png';

export const Categories = () => {
  return ( 
    <div className={styles.container}>
        <p>Категории</p>
        
     <div className={styles.container__carusel}>
        
     <Carousel cols={4} rows={1} gap={60} loop >
      <Carousel.Item>
        <img width="100%" src={img1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img4} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img1}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2}  alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} alt="img" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img4} alt="img" />
      </Carousel.Item>
    </Carousel>
     </div>


     <div className={styles.gridContainer}>
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
          <div className={styles.item5}></div>
          <div className={styles.item6}></div>
          <div className={styles.item7}></div>
          <div className={styles.item8}></div>
          <div className={styles.item9}></div>
          <div className={styles.item10}></div>
          <div className={styles.item11}></div>
        </div>
    </div>
  )
}
