import React from 'react';
import styles from './index.module.sass';
import logo from './img/photo_2022-12-27_19-19-19-removebg-preview.png';
import { Categories } from '../categories/categories';
import { Signin } from '../signin/signin';
import { Contact } from '../contact/contact';

import { Link } from 'react-scroll';

export const Main = () => {
  return ( 
    <>
      <div className={styles.main}>
        <div className={styles.shadow}>
            <div className={styles.nav}>
                <ul>
                    <li>
                       <span class="material-symbols-outlined">sort</span>
                    </li>
                    <li>
                      <Link to="categories">Категории</Link>
                    </li>
                    <li>
                      <Link to="signin">Подписация</Link>
                    </li> 
                    <li>
                      <Link to="contact">Более</Link>
                    </li>
                    <li>
                       <img src={logo} alt="logo"/>
                    </li>
                    <li>
                       <span class="material-symbols-outlined">chat_bubble</span>
                    </li>
                    <li>
                       <span class="material-symbols-outlined">emoji_people</span>
                    </li>
                    <li>
                       <span class="material-symbols-outlined">favorite</span>
                    </li>
                    <li>
                       <span class="material-symbols-outlined">shopping_cart_checkout</span>
                    </li>
                </ul>
            </div>

            <div className={styles.box}>
              <h2>Новая коллекция</h2>
              <hr/>
              <p>Смотреть Новинки</p>
               
               <Link to="categories">
               <div className={styles.circle}>
                   <span class="material-symbols-outlined">arrow_downward</span>
               </div>
               </Link>
            </div>
        </div>
      </div>
      <section id="categories"><Categories/></section>
      <section id="signin"><Signin/></section>
      <section id="contact"><Contact/></section>
    </>
  )
}
