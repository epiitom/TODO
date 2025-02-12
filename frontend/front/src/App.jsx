import { useState } from 'react'
import React from "react";

import './App.css'


const Counter = () => {
    const [count,setCount] =  useState(0)

    return (
      <div>
        <p> Count Component - {count} </p>
       <h5> Number is {count % 2 == 0 ? "even": "odd"} </h5>
          <button onClick ={() => setCount(count+1)}> Increment</button>
          <button onClick ={() => setCount(count-1)}> Decrement</button>
      </div>
    )
  }
  export default Counter;
