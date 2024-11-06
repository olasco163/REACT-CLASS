import React from 'react'
import "./App.css";
import { useState, useEffect } from 'react';
// import Product from './Product';
import FetchProduct from './fetchProduct';



const users = [
  {
    username: "GABRIEL",
    userHubby: "LEARNING"
  },
  {
    username: "SAHAD",
    userHubby: "Playing video games"
  },
  {
    username: "ABRAHAM",
    userHubby: "EATING"
  },
  {
    username: "OLAOLUWA",
    userHubby: "flirting"
  }
]

const App = () => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState();
  const [hubby, setHubby] = useState();
  
  useEffect(()=>{
    setHubby(users[index].userHubby)
    setName(users[index].username)
  },[index]);

  function setToGabriel(){
    setIndex(0)
  }
  
  return (
    <div>
      {/* MY NAME IS {name} I LOVE {hubby} <br />
      <button
        onClick={setToGabriel}
      >GABRIEL</button>
      <button
        onClick={() => {setIndex(1)}}
      >SAHAD</button>
      <button
        onClick={() => setIndex(2)}
      >Abraham</button>
      <button
        onClick={() => setIndex(3)}
      >Olaoluwa</button> */}
      {/* <Product /> */}
      <FetchProduct  />
    </div>
  )
}

export default App