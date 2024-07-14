
import React from 'react'
import "./App.css"
import Item from './components/Item'
import Cart from './components/Cart'

function App() {


  
  
  return (
    <div className = "App">
     
     <Item name="MacBook" price={10000}/>
     <Item name="USB" price={4000}/>
     <Item name="Pen" price={3000}/>


    
<Cart/>
     </div>
  )
}

export default App