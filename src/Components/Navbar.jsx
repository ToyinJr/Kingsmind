// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-50 bg-gradient-to-b p-2 mb-2 from-[#006ca7] to-[#2a166f] shadow text-black">
//       <div className="flex justify-between px-8 md:px-14 items-center">
//         <Link to={"/"}>
//           <div className="flex items-center gap-2 place-self-center">
//             <img src="images/logo.png" className="max-sm:scale-75 scale-50 h-20" alt="logo" />
//             {/* <p className="sm:text-sm md:text-2xl font-bold">King's Mind Educators</p> */}
//           </div>
//         </Link>

//         <div className="flex gap-4 items-center text-2xl place-self-center">
//           {/* <Link to={"/"}><p>Home</p></Link> */}
//           {/* <p>Services</p> */}
//           <Link to={"/company"}>
//             <p>Company</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b mb-2 from-[#006ca7] to-[#2a166f] shadow">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-14 py-2">

        {/* ── Logo ── */}
        <Link to="/">
          <img
            src="images/logo.png"
            alt="King's Mind Educators logo"
            className="h-10 sm:h-15 w-auto object-contain"
          />
        </Link>

        {/* ── Nav links ── */}
        <nav className="flex items-center gap-6 text-white font-semibold text-sm sm:text-base">
          <Link
            to="/company"
            className="hover:text-white/70 transition-colors duration-200"
          >
            Company
          </Link>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;