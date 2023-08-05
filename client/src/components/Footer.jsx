import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-green-200 text-black pt-5 pb-2">
      <div className="container justify-center mx-20 flex items-center w-100">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-0 mb-5 md:mb-0 gap-10">
          <div className="footer-logo">
            <img src={logo} alt="Career Campus" className="w-auto h-auto" />
          </div>
        </div>
        <div className="flex flex-col px-80">
          <div className="flex gap-20">
            <div className="flex flex-col space-y-4">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link to="/team">Team</Link>
              <Link to="/register">Register</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-4 gap-20 w-full">
        <div className="self-center ml-10">&copy; 2023 CareerCompass. All rights reserved.</div>
        <div className="self-end flex gap-10">
          <Link to="#" className="mr-2">
            <img className="w-11" src={github} alt="Follow on GitHub" />
          </Link>
          <Link to="#" className="mr-10">
            <img className="w-11" src={linkedin} alt="Follow on LinkedIn" />
          </Link>
        </div>
      </div>
    </div>);
}