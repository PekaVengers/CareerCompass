import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="absolute top-[3.19rem] left-[17.5rem] w-[94.44rem] h-[3.88rem] text-[1rem] text-ajdan-black">
        <div className="absolute top-[0.63rem] left-[56.06rem] w-[38.38rem] h-[1.31rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[38.38rem] h-[1.31rem]">
            <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-center gap-[2.75rem]">
              <b className="relative leading-[130%]">Home</b>
              <b className="relative leading-[130%]">Search Jobs</b>
              <b className="relative leading-[130%]">Job Alerts</b>
              <b className="relative leading-[130%]">Employers</b>
              <b className="relative leading-[130%]">Career Advice ↓</b>
            </div>
          </div>
        </div>
        <img
          className="absolute h-full w-[16.55%] top-[0%] right-[83.45%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={logo}
        />
      </div>
    </>
  );
}
