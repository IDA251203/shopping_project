import './App.css';
import { Access } from './components/access/access';
import { Nav } from './components/nav/nav';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Logout } from './components/logout/logout';
import { Create } from './components/create/create';
import { Cart } from './components/cart/cart';
import { Account } from './components/account/account';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Nav/>}>
               <Route index element={<Access />} />
               <Route path='cart' element={<Cart/>} />
               <Route path='create' element={<Create/>} />
               <Route path='account' element={<Account/>} />
               <Route path='logout' element={<Logout/>} />
            </Route>
         </Routes>
         
      </BrowserRouter>
    </div>
  );
}

export default App;
