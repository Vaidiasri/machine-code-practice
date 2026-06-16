import handelCounter from "../hook/handelCounter"

const  Counter=()=>{
    const{count,
        handelDecremet,
        handelIncrement,
        handelRest,setStep,step} =handelCounter(100)
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handelIncrement}>+</button>
        <button onClick={handelDecremet}>-</button>
        <button onClick={handelRest}>reset</button>
        <br/>
        <label>Step: </label>
        <input
            type="number"
            value={step}
            onChange={(e)=>setStep(Number(e.target.value))}
        />
        </>
    )
}
export default Counter