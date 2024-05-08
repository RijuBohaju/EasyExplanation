import Layout from "./components/Layout/Layout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Pagenotfound from "./pages/Pagenotfound"
function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/courses" element={<Courses />}/>
    <Route path="/*" element={<Pagenotfound/>} />
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
