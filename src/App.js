
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;