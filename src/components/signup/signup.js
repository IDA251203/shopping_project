import React,{useState} from 'react';
import axios from 'axios';
import styles from './index.module.sass';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// import { All } from '../all/all';
// import { Link, Outlet } from 'react-router-dom';

// import { useRef } from 'react';

export const Signup = () => { 

  // const divEl = useRef(null);

  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(data)
    axios 
    .post(url , data)
    .then(function(response) {
        // console.log(response)
    })
    .catch(function(error){
        // console.log(error)
    })
    document.querySelectorAll(".container__input").value="";
  };

  const url = "http://139.144.180.200:3000/sign-up"
    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    let data = {name, email,  password} 

   

  return (
    <>
    <div className={styles.container}>
      {/* <p className={styles.container__text1}>Узнайте  первым о новинках</p> */}

      <TextField id="outlined-basic"
       label="Name" 
       variant="outlined" 
       className={styles.container__input} 
       required
       value={name}
       type="text"
       onChange={(e) => {
         setname(e.target.value)
     }}/>


      <TextField id="outlined-basic" 
      label="Email"
      variant="outlined" 
      className={styles.container__input1}
      required
      value={email}
      type="email"
      onChange={(e) => {
        setemail(e.target.value)
     }} />

      <TextField id="outlined-basic" 
      type="password" 
      label="Password" 
      variant="outlined"
      className={styles.container__input2}
      required
      value={password}
      onChange={(e) => {
        setpassword(e.target.value)
    }} />
       {/* <a href={All}> */}
      
        <Button variant="contained" onClick={handleClickOpen} className={styles.container__button}>Sign up</Button>
       {/* </a> */}
      {/* <p className={styles.container__text2}>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен с условиями конфиденциальности.
      </p> */}
    </div>
    {/* <Outlet/> */} 
    </>
  )
}
