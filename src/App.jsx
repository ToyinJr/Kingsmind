import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Company from "./Components/Company";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/company" element={<Company />} />
      </Routes>
    </div>
  )
}

export default App
