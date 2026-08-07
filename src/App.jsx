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
import ToastPopUp from "./componets/ToastPopup"
import Modal from "./componets/Modal"
import PasswordStrength from "./componets/PasswordStrenght"
import GridLight from "./componets/GridLight"
import ColumnTable from "./componets/ColumnTable"

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
{/* <Traffic/> */}
{/* <ToastPopUp/> */}
{/* <Modal/> */}
{/* <PasswordStrength/> */}
{/* <GridLight/> */}
<ColumnTable/>
   </div>

   </>
  )
}

export default App
