import github from "../assets/github.png";

export default function Footer() {
  return (
    <div className="bg-[#CFFFD9] h-[10vh] flex justify-around items-center">
      <div className="paraFooter">
        <p className="font-bold">&copy; 2023 CareerCompass. All rights reserved.</p>
      </div>
      <div className="ghFooter">
        <a href="https://github.com/PekaVengers/CareerCompass"><img className="w-11" src={github} alt="Follow on GitHub" /></a>
      </div>
    </div>
  );
}