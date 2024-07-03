import React, { Fragment,useState } from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'; 
import CartProvided from "./components/Store/CartProvided";
function App() {
  const [cartisshown,setcartisshown] = useState(false);
  
  const  showcarthandler = () =>{
    setcartisshown(true); 
  }
  const hidecarthandler = () => {
    setcartisshown(false);
  }
  return (
    <CartProvided className="App">
    {cartisshown && <Cart hidecart={hidecarthandler}/>}
      <Header showcart={showcarthandler}/>
      <main>
         <Meals/>
      </main>
    </CartProvided>
  );
}

export default App;
 