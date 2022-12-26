import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
// import img1 from './img/img1.jpg';

import axios from 'axios';



export const Create = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  
   const [data, setDate] = useState([]);
   const url1 = "http://139.144.180.200:3000/getData";
   useEffect(() => {
     axios.get(url1)
       .then(function (response) {
         setDate(response.data)
         //  console.log(response.data);
       } , [])
       axios.create()
   }
   )
  //  const fakeDate="http://139.144.180.200:3000/getData";

  return (
    <div className={styles.container}> 
        <div className={styles.container__main}>
        {
        data.map((item) =>
        
        <div className={styles.container__main__box}>
           <img src={"http://139.144.180.200:3000/img3.jpg"} alt="img1"/>
           <p>Price: ${item.price}</p>
           <p className={styles.container__main__box__text}>Size: {item.size}</p>
           <p className={styles.container__main__box__text}>Place: {item.place}</p>
           <p className={styles.container__main__box__text}>Phone: {item.phone}</p>
           <button className={styles.btn}>BUY</button>
        </div>
           
         )}

{/* <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      
      {fakeDate
        .filter((val) => {
          if (val == "") {
            return val;
          } else if (
            val.email             
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((value, key) => {
          return (
            <div key={key} className={styles.user}>
              <p>{value.last_name}</p>
              <p>{value.email}</p>
            </div>
          );
        })}
    </div> */}
        </div>

        <div className={styles.container__aside}>
         <p>Number of items purchased:</p>
         <p className={styles.container__aside__cart}></p>
         <button>Cancellation</button>
        </div>
    </div>
  )
}
