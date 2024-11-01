import React, { useContext } from 'react'
import { myContext } from '../Context/Context'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const {isLoggedin}=useContext(myContext)
    if(isLoggedin){
        return children
    }else{
        <Navigate to='/login'/>
    }
  return (
    <div>
      
    </div>
  )
}

export default Protected
