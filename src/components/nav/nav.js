import React from 'react';
import styles  from "./index.module.sass"
import img1 from './img/3f9fed05f53b28aac803243d71a57055-removebg-preview.png'
import { Link, Outlet } from 'react-router-dom';

import { useRef } from 'react';

function Close(){
  document.querySelector("#close").style.display="none";
}
function Open(){
  document.querySelector("#close").style.display="block";
}
export const Nav = () => { 
  
  const divEl = useRef(null);
  return (
   <>
    <div className={styles.container}>
        <ul>
            <p className={styles.container__li}>
            <span className="material-symbols-outlined" onClick={Open} >menu</span>
             <div className={styles.container__li__dropdown} id="close">
               <div className={styles.container__li__dropdown__box1} onClick={Close} >
                   <span className="material-symbols-outlined">close</span>
               </div>
               <div className={styles.container__li__dropdown__box}>
                   <span className="material-symbols-outlined icon" sx={{m:"20px"}}>shopping_cart_checkout</span>
                   <Link to="/cart"    ref={divEl} className={styles.container__li__dropdown__box__text}>Cart</Link>
               </div>
               <div className={styles.container__li__dropdown__box}>
                   <span className="material-symbols-outlined icon">add_box</span>
                   <Link to="/create"    ref={divEl} className={styles.container__li__dropdown__box__text}>Create</Link>
               </div>
               <div className={styles.container__li__dropdown__box}>
                   <span className="material-symbols-outlined icon">person</span>
                   <Link to="/account"    ref={divEl} className={styles.container__li__dropdown__box__text}>Account</Link>
               </div>
               <div className={styles.container__li__dropdown__box}>
                   <span className="material-symbols-outlined icon">logout</span>
                   <Link to="/logout"    ref={divEl} className={styles.container__li__dropdown__box__text}>Sign in</Link>
               </div>
             </div> 
            </p>
            <li>
                <img src={img1} alt="img1" className={styles.img1}/>
                <Link to="/"    ref={divEl} className={styles.container__text1}>ReactReserve</Link>
            </li>
            <li>
            <span className="material-symbols-outlined icon" sx={{m:"20px"}}>shopping_cart_checkout</span>
              <Link to="/cart"    ref={divEl} className={styles.container__text}>Cart</Link>
              </li>
            <li>
            <span className="material-symbols-outlined icon">add_box</span>
              <Link to="/create"    ref={divEl} className={styles.container__text}>Create</Link>
              </li>
            <li>
            <span className="material-symbols-outlined icon">person</span>
              <Link to="/account"    ref={divEl} className={styles.container__text}>Profile</Link>
              </li>
            <li>
            <span className="material-symbols-outlined icon">logout</span>
              <Link to="/logout"    ref={divEl} className={styles.container__text}>Logout</Link>
              </li>
        </ul>
     </div>
     <Outlet/>
   </>
  )
}
