import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";

function App() {
  return (
 <>
 <div>

 <BrowserRouter>


      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>
    </BrowserRouter>



 </div>
 
 
 
 </>
  )
}

export default App