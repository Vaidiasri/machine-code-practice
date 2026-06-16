import { useState } from "react"

const handelCounter=(intialValue, initialStep=1)=>{
    const [count,setCount]=useState(intialValue)
    const [step,setStep]=useState(initialStep)

   const handelIncrement=()=>{
    setCount(perv=>perv+step)
    }
    const handelDecremet=()=>{
        setCount(perv=>perv-step)
        }
        const handelRest=()=>{
            setCount(intialValue)
            }
    return{
        count,
        step,
        setStep,
        handelDecremet,
        handelIncrement,
        handelRest
    }

}
export default handelCounter