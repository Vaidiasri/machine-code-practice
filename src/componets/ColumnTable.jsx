import { useState } from "react"

const ColumnTable=()=>{
    const [row,setRow]=useState(2)
    const handelRow=(e)=>{
        setRow(Number(e.target.value))
        // console.log(row)
    }
    return(
        <>
        <div>
            <input type="range" min="2" max="8" onChange={handelRow} value={row}/>
            <p>{row}</p>

        </div>
        </>
    )
}
export default ColumnTable