import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="navbar mt-4 w-[95%] bg-neutral mx-auto rounded-xl">
      <div className="navbar-start">
        <Link to="/" className="text-lg font-medium">
          Contact-O
        </Link>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-end">
        <Link to="/create-contact">
          <Button variant="normal" text="Create Contact" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
