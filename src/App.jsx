import Accordion from "./componets/Accordion"
import Counter from "./componets/Counter"
import Guess from "./componets/Guess"
import Image from "./componets/Image"
import StarRating from "./hook/StarRating"
import "./index.css"

function App() {
  return (
   <>
   {/* <Counter/> */}
   {/* <Image/> */}
   {/* <Accordion/> */}
   {/* <Guess/> */}
   <div className="App">
    
<StarRating value={2} total={5}></StarRating>
   </div>

   </>
  )
}

export default App
