import logo from "../assets/images/logo.png"
import socials from "../assets/images/social.png"

export default function Footer() {
  return (
    <>
      <div className="absolute top-[276rem] left-[0rem] w-[120rem] h-[33.63rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-honeydew w-[120rem] h-[33.63rem]" />
        <img
          className="absolute h-[13.01%] w-[8.34%] top-[73.05%] right-[80.72%] bottom-[13.94%] left-[10.94%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={socials}
        />
        <img
          className="absolute h-[20.07%] w-[22.5%] top-[23.23%] right-[66.56%] bottom-[56.69%] left-[10.94%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={logo}
        />
        <div className="absolute top-[20.06rem] left-[13.13rem] leading-[130%] font-extralight flex items-center w-[26.88rem] h-[2.5rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Copyright @2023 CareerCompass</p>
            <p className="m-0">All right reserved.</p>
          </span>
        </div>
        <div className="absolute top-[2.38rem] left-[54.06rem] leading-[130%] font-extralight flex items-center w-[26.88rem] h-[24.38rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Home</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Services</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">About</p>
            <p className="m-0">&nbsp;</p>
          </span>
        </div>
        <div className="absolute top-[2.63rem] left-[82.44rem] leading-[130%] font-extralight flex items-center w-[26.88rem] h-[20.19rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Team</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Register</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Contact</p>
          </span>
        </div>
      </div>
    </>
  );
}
