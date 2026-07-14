import Accordion from "./componets/Accordion"
import Counter from "./componets/Counter"
import Guess from "./componets/Guess"
import Image from "./componets/Image"
import StringTransfromers from "./componets/StringTransfromers"
import TelephoneFormatter from "./componets/TelephoneFormatter"
import StarRating from "./hook/StarRating"
import Stepper from "./componets/Steper"
import "./index.css"
import Calculator from "./componets/Calculator"
import Traffic from "./componets/Traffic"

function App() {
  return (
   <>
   {/* <Counter/> */}
   {/* <Image/> */}
   {/* <Accordion/> */}
   {/* <Guess/> */}
   <div className="App">
    
{/* <StarRating value={2} total={5}></StarRating> */}
{/* <TelephoneFormatter/> */}
{/* <StringTransfromers/> */}
{/* <Stepper/> */}
{/* <Calculator/> */}
<Traffic/>
   </div>

   </>
  )
}

export default App
