import React, { useState, useEffect } from 'react';
import styles from './index.module.sass';
import img1 from './img/img1.jpg';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

import axios from 'axios';



export const Create = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  
   const [data, setDate] = useState([]);
   const url1 = "http://139.144.180.200:3000/product-info";
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

  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);

  return (
    <div className={styles.container}> 

    <div className={styles.container__filter}>
     <div className={styles.container__filter__position}>
     <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={top100Films}
      getOptionLabel={(option) => option.name}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Fixed tag" placeholder="Favorites" />
      )}
    />
     </div>

    </div>

        <div className={styles.container__main}>
        {
        data.map((item) =>
        
        <div className={styles.container__main__box}>
           <img src={img1} alt="img1"/>
           <p>Price: ${item.price}</p>
           <p className={styles.container__main__box__text}><b>Name: {item.name}</b></p>
           <p className={styles.container__main__box__text}>Size: {item.size}</p>
           <p className={styles.container__main__box__text}>Place: {item.place}</p>
           <p className={styles.container__main__box__text}>Phone: {item.phone}</p>
           <button className={styles.btn}>BUY</button>
        </div>
           
         )}


        </div>

        {/* <div className={styles.container__aside}>
         <p>Number of items purchased:</p>
         <p className={styles.container__aside__cart}></p>

         
         <button>Cancellation</button>
        </div> */}
    </div>
  )
}

const top100Films=[
  
    {
        "id":1,
        "name":"name1",
        "size":"44-50",
        "place":"Turkey",
        "price":50,
        "phone":"+998941234567",
        "image":"./img/img1.jpg"
    },
    {
        "id":2,
        "name":"name2",
        "size":"44-48",
        "place":"Turkey",
        "price":52,
        "phone":"+998941234567",
        "image":"./img/img2.jpg"
    },
    {
        "id":3,
        "name":"name3",
        "size":"44-49",
        "place":"Turkey",
        "price":45,
        "phone":"+998941234567",
        "image":"./img/img3.jpg"
    },
    {
        "id":4,
        "name":"name4",
        "size":"46-50",
        "place":"China",
        "price":30,
        "phone":"+998941234567",
        "image":"./img/img4.jpg"
    },
    {
        "id":5,
        "name":"name5",
        "size":"44-50",
        "place":"China",
        "price":50,
        "phone":"+998941234567",
        "image":"./img/img5.jpg"
    },
    {
        "id":6,
        "name":"name6",
        "size":"44-48",
        "place":"Turkey",
        "price":60,
        "phone":"+998941234567",
        "image":"./img/img6.jpg"
    },
    {
        "id":7,
        "name":"name7",
        "size":"26cm x 35 cm",
        "place":"Korea",
        "price":32,
        "phone":"+998941234567",
        "image":"./img/img7.jpg"
    },
    {
        "id":8,
        "name":"name8",
        "size":"26cm x 35 cm",
        "place":"Korea",
        "price":32,
        "phone":"+998941234567",
        "image":"./img/img8.jpg"
    },
    {
        "id":9,
        "name":"name9",
        "size":"26cm x 35 cm",
        "place":"Korea",
        "price":31,
        "phone":"+998941234567",
        "image":"./img/img9.jpg"
    },
    {
        "id":10,
        "name":"name10",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":40,
        "phone":"+998941234567",
        "image":"./img/img10.jpg"
    },
    {
        "id":11,
        "name":"name11",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":40,
        "phone":"+998941234567",
        "image":"./img/img11.jpg"
    },
    {
        "id":12,
        "name":"name12",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":41,
        "phone":"+998941234567",
        "image":"./img/img12.jpg"
    },
    {
        "id":13,
        "name":"name13",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":40,
        "phone":"+998941234567",
        "image":"./img/img13.jpg"
    },
    {
        "id":14,
        "name":"name14",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":42,
        "phone":"+998941234567",
        "image":"./img/img14.jpg"
    },
    {
        "id":15,
        "name":"name15",
        "size":"26cm x 29cm",
        "place":"Turkey",
        "price":40,
        "phone":"+998941234567",
        "image":"./img/img15.jpg"
    },
    {
        "id":16,
        "name":"name16",
        "size":"36-40",
        "place":"China",
        "price":19,
        "phone":"+998941234567",
        "image":"./img/img16.jpg"
    },
    {
        "id":17,
        "name":"name17",
        "size":"36-40",
        "place":"China",
        "price":19,
        "phone":"+998941234567",
        "image":"./img/img17.jpg"
    },
    {
        "id":18,
        "name":"name18",
        "size":"26cm x 33cm",
        "place":"Korea",
        "price":42,
        "phone":"+998941234567",
        "image":"./img/img18.jpg"
    },
    {
        "id":19,
        "name":"name19",
        "size":"25cm x 33cm",
        "place":"Korea",
        "price":40,
        "phone":"+998941234567",
        "image":"./img/img19.jpg"
    },
    {
        "id":20,
        "name":"name20",
        "size":"44-49",
        "place":"Turkey",
        "price":12,
        "phone":"+998941234567",
        "image":"./img/img20.jpg"
    }


];
