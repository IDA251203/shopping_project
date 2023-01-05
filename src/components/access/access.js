import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useRef } from 'react';
import styles from './index.module.sass';
import Carousel from 'better-react-carousel';
import img1 from './img/Rectangle 7.png';
import img2 from './img/Rectangle 9.png';
import img3 from './img/Rectangle 10.png';
import img4 from './img/Rectangle 11.png';
import Button from '@mui/material/Button';

export const Access = () => {
  const divEl = useRef(null);
  return ( 
    <>
    <div className={styles.container}>
      <div className={styles.container__shadow}>
        {/* <div className={styles.container__shadow__imgbox}>
        <Link to="/cart"    ref={divEl}><button>BUY NOW</button></Link>
        </div> */}
        <div className={styles.container__shadow__box}>
          <p>Popular</p>
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
    <Link to="/cart"    ref={divEl} className={styles.container__shadow__box__link}><Button variant="contained">BUY NOW</Button></Link>
        </div>

        <div className={styles.container__shadow__box}>
          <p>Sporty</p>
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
    <Link to="/cart"    ref={divEl} className={styles.container__shadow__box__link}><Button variant="contained">BUY NOW</Button></Link>
        </div>

        <div className={styles.container__shadow__box}>
          <p>For The Party</p>
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
    <Link to="/cart"    ref={divEl} className={styles.container__shadow__box__link}><Button variant="contained">BUY NOW</Button></Link>
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  )
}
