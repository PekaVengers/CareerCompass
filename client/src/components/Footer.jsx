import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-green-200 text-black py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center md:items-start md:space-x-12">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-0 mb-5 md:mb-0 gap-10">
          <div className="footer-logo">
            <img src={logo} alt="Career Campus" className="w-auto h-auto" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div>&copy; 2023 CareerCompass</div>
            <div>All rights reserved.</div>
            <div className="flex mt-4">
              <Link to="#" className="mr-2">
                <img className="w-11" src={github} alt="Follow on GitHub" />
              </Link>
              <Link to="#" className="">
                <img className="w-11" src={linkedin} alt="Follow on LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0">
          <Link to="/team">Team</Link>
          <Link to="/register">Register</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div> );
}