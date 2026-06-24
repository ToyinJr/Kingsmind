import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0a0e1a] via-[#0d1b3e] to-[#1a1040]">
      <Navbar />
      <Contacts />
      <div className="md:mx-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
