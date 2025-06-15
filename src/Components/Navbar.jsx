import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="flex justify-around items-center max-[700px]:space-y-4">
        <Link to={"/"}>
                <div className="flex items-center gap-2">
          <img src="images/logo.png" alt="logo" />
          <p className="sm:text-2xl md:text-4xl font-bold">King's Mind Educators</p>
        </div></Link>

        <div className="flex gap-4 items-center text-2xl">
          <Link to={"/"}><p>Home</p></Link>
          {/* <p>Services</p> */}
          <Link to={"/company"}><p>Company</p></Link>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
