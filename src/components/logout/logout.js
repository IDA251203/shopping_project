import React from 'react';
import styles from './index.module.sass';

import TextField from '@mui/material/TextField';

import { Button } from '@mui/material';

export const Logout = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__box}>
          <p>Registration</p>
          <div className={styles.container__box__element}>
          <TextField id="standard-basic" label="First name" variant="standard" sx={{width:"90%"}} />
          </div>
          <div className={styles.container__box__element}>
          <TextField id="standard-basic" label="Last name" variant="standard"sx={{width:"90%"}}  />
          </div>
          <div className={styles.container__box__element}>
          <TextField id="standard-basic" label="Email or Gmail" variant="standard" sx={{width:"90%"}} type="email"/>
          </div>
          <Button variant="contained" className={styles.container__box__button}>DISPATCH</Button>
        </div>
    </div>
  )
}
