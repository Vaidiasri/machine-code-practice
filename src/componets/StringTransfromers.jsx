import { useState } from "react"

const  StringTransfromers=()=>{
    const [input,setInput]=useState("")
    const  handleText=(e)=>{
        // let str=e.target.value
        // console.log(str)
        setInput(e.target.value)
    }
    const handleButton = (type) => {
        if (type === "lower") {
          setInput(input.toLowerCase());
        } 
        else if (type === "upper") {
          setInput(input.toUpperCase());
        } 
        else if (type === "trim") {
          setInput(input.trim());
        } 
        else if (type === "camel") {
          let result = input
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .map((word, index) =>
              index === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join("");
      
          setInput(result);
        } 
        else if (type === "pascal") {
          let result = input
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join("");
      
          setInput(result);
        } 
        else if (type === "snake") {
          let result = input
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .join("_");
      
          setInput(result);
        } 
        else if (type === "kebab") {
          let result = input
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .join("-");
      
          setInput(result);
        }
      };
      
      return(
        <>
        <input placeholder="Enter the  String" onChange={handleText} value={input}/>
        <button onClick={() => handleButton("lower")}>Lower Case</button>
<button onClick={() => handleButton("upper")}>Upper Case</button>
<button onClick={() => handleButton("camel")}>Camel Case</button>
<button onClick={() => handleButton("pascal")}>Pascal Case</button>
<button onClick={() => handleButton("snake")}>Snake Case</button>
<button onClick={() => handleButton("kebab")}>Kebab Case</button>
<button onClick={() => handleButton("trim")}>Trim</button>
        <h1>String Transformer</h1>
        <p>{input}</p>
        </>
    )
}
export default StringTransfromers