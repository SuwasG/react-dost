import React, { useRef, useState } from 'react'

const Counter = () => {
    const[number, setNumber]=useState(0)
    let num=useRef(0) ;

    const handleClick=(e)=>{
        e.stopPropagation()
        // setTimeout(()=>{
        //     // setNumber(number+1)
        //     setNumber(number=>number+1)
        // },2000)

        setNumber(number=>number+1)
        setNumber(number=>number+1)
        setNumber(number=>number+1)
        num.current++
        // console.log(number)
        
        console.log(num.current)
    }
  return (
    <>

    <h1 style={{color:'green'}}>{number} </h1>
    <button onClick={handleClick}>Add</button>

    </>
  )
}

export default Counter