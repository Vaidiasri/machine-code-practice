import { useState } from "react"

const Modal=()=>{
    const[modal,setModal]=useState(false)
    const handelCLick=()=>{
        setModal(true)
        console.log(modal)
    }
    const handelClose=()=>{
        setModal(false)
    }
    return(
        <>
        <button onClick={handelCLick}>
            Modal
        </button>
        {modal && (
        <div style={{
            width:"400px",
            height:"400px",
            background:"black",
            color:"white",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <p>Hello</p>
            <button onClick={handelClose}>Close</button>          
        </div>
      )}
        </>
    )
}
export  default Modal