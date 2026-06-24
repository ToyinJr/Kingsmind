import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow text-black">
      <div className="flex justify-between px-8 md:px-14 items-center">
        <Link to={"/"}>
          <div className="flex items-center gap-2 place-self-center">
            <img src="images/logo.png" className="max-sm:scale-75" alt="logo" />
            {/* <p className="sm:text-sm md:text-2xl font-bold">King's Mind Educators</p> */}
          </div>
        </Link>

        <div className="flex gap-4 items-center text-2xl place-self-center">
          {/* <Link to={"/"}><p>Home</p></Link> */}
          {/* <p>Services</p> */}
          <Link to={"/company"}>
            <p>Company</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
