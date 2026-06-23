import Navbar from "./Components/Navbar"
import Contacts from "./Components/Contacts";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <Contacts />
      <div className="md:mx-8">
        <Outlet />
      </div>
    </div>
  )
}

export default App
