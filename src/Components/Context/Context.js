import React,{ useState } from "react";
import { createContext } from "react";

export const myContext=createContext();
 const Cartfunction =({children})=>{
  const [cart,setCart]=useState([])
  return (
    <myContext.Provider value={{cart,setCart}}>{children}</myContext.Provider>
  )
 }
 export default Cartfunction