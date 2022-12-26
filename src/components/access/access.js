import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useRef } from 'react';
import styles from './index.module.sass';

export const Access = () => {
  const divEl = useRef(null);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.container__imgbox}>
        <Link to="/cart"    ref={divEl}><button>BUY NOW</button></Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}
