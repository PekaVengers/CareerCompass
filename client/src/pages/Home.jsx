import logo from "../assets/images/logo.png";
import mainBanner from "../assets/images/mainBanner.png";
import service1icon from "../assets/images/services1icon.png";
import service2icon from "../assets/images/services2icon.png";
import service3icon from "../assets/images/services3icon.png";
import service4icon from "../assets/images/services4icon.png";
import noofstudentsregisteredphoto from "../assets/images/noofstudentsregisteredphoto.png";
import aboutUsBg from "../assets/images/aboutUsBg.png";
import social from "../assets/images/social.png";
import teamphoto1 from "../assets/images//teamphoto1.png"
import teamphoto2 from "../assets/images//teamphoto2.png"
import teamphoto3 from "../assets/images//teamphoto3.png"
import teamphoto4 from "../assets/images//teamphoto4.png"
import teamCardRectangle from "../assets/images/teamCardRectangle.png"
import contactUsSVG from "../assets/images/contactUsSVG.png"


export default function Home() {
  return (
    <>
      <div className="relative bg-white w-full h-[309.63rem] overflow-hidden text-left text-[1.5rem] text-black font-inter">
        <div className="absolute top-[238.63rem] left-[9.88rem] w-[93.5rem] h-[30.63rem]">
          <img
            className="absolute top-[0.38rem] left-[0rem] w-[37.31rem] h-[29.88rem] object-cover"
            alt=""
            src={contactUsSVG}
          />
          <div className="absolute top-[26.75rem] left-[41.44rem] rounded-4xl bg-forestgreen h-[3.88rem] flex flex-row py-[0.81rem] px-[3rem] box-border items-center justify-center text-white">
            <b className="relative leading-[130%]">SEND</b>
          </div>
          <div className="absolute top-[4.88rem] left-[41.44rem] w-[51.94rem] h-[3.44rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-honeydew w-[51.94rem] h-[3.44rem]" />
            <div className="absolute top-[0.5rem] left-[1.63rem] leading-[130%] font-extralight flex items-center w-[22.06rem] h-[2.5rem]">
              Name
            </div>
          </div>
          <div className="absolute top-[10rem] left-[41.44rem] w-[51.94rem] h-[3.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-honeydew w-[51.94rem] h-[3.5rem]" />
            <div className="absolute top-[0.31rem] left-[1.63rem] leading-[130%] font-extralight flex items-center w-[22.06rem] h-[2.5rem]">
              Email
            </div>
          </div>
          <div className="absolute top-[15.19rem] left-[41.44rem] w-[51.94rem] h-[10.44rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-honeydew w-[51.94rem] h-[10.44rem]" />
            <div className="absolute top-[0.75rem] left-[1.63rem] leading-[130%] font-extralight flex items-center w-[22.06rem] h-[2.5rem]">
              Message
            </div>
          </div>
          <div className="absolute top-[0rem] left-[41.94rem] leading-[140%] inline-block w-[51.56rem] h-[4.88rem] text-[2.56rem] font-alfa-slab-one">
            <p className="m-0">CONTACT US</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-[1.75rem] font-alice">{` `}</p>
          </div>
        </div>
        <div className="absolute top-[50.75rem] left-[0rem] w-[120rem] h-[48.56rem] text-center text-[1.75rem] font-alice">
          <div className="absolute top-[0rem] left-[0rem] bg-white w-[120rem] h-[48.56rem]" />
          <div className="absolute top-[6.39rem] left-[31.19rem] leading-[140%] inline-block w-[57.63rem] h-[5.79rem] text-[2.56rem] font-alfa-slab-one">
            <p className="m-0">SERVICES</p>
            <p className="m-0 text-[1.75rem] font-alice">
              We are dedicated to helping you unlock your potential, discover
              your strengths, and align your education with your passions
            </p>
          </div>
          <div className="absolute top-[18.95rem] left-[14.38rem] w-[18.75rem] h-[25.86rem]">
            <div className="absolute top-[7.94rem] left-[0rem] rounded-xl bg-honeydew w-[18.75rem] h-[17.92rem]" />
            <img
              className="absolute top-[0rem] left-[3.75rem] w-[11.25rem] h-[10.75rem]"
              alt=""
              src={service1icon}
            />
            <div className="absolute top-[11.77rem] left-[1.44rem] leading-[140%] inline-block w-[15.38rem] h-[11.23rem]">
              AI-Powered Skill Matching
            </div>
          </div>
          <div className="absolute top-[18.95rem] left-[38.13rem] w-[18.75rem] h-[25.86rem]">
            <div className="absolute top-[7.94rem] left-[0rem] rounded-xl bg-honeydew w-[18.75rem] h-[17.92rem]" />
            <img
              className="absolute top-[0rem] left-[3.75rem] w-[11.25rem] h-[10.75rem]"
              alt=""
              src={service2icon}
            />
            <div className="absolute top-[11.77rem] left-[1.69rem] leading-[140%] inline-block w-[15.38rem] h-[11.23rem]">
              Resource-Rich Learning
            </div>
          </div>
          <div className="absolute top-[18.95rem] left-[61.88rem] w-[18.75rem] h-[25.86rem]">
            <div className="absolute top-[7.94rem] left-[0rem] rounded-xl bg-honeydew w-[18.75rem] h-[17.92rem]" />
            <img
              className="absolute top-[0rem] left-[3.75rem] w-[11.25rem] h-[10.75rem]"
              alt=""
              src={service3icon}
            />
            <div className="absolute top-[11.77rem] left-[1.94rem] leading-[140%] inline-block w-[15.38rem] h-[11.23rem]">
              Community of Experts
            </div>
          </div>
          <div className="absolute top-[18.95rem] left-[85.63rem] w-[18.75rem] h-[25.86rem]">
            <div className="absolute top-[7.94rem] left-[0rem] rounded-xl bg-honeydew w-[18.75rem] h-[17.92rem]" />
            <img
              className="absolute top-[0rem] left-[3.75rem] w-[11.25rem] h-[10.75rem]"
              alt=""
              src={service4icon}
            />
            <div className="absolute top-[11.77rem] left-[2.19rem] leading-[140%] inline-block w-[15.38rem] h-[11.23rem]">
              Personalized Career Roadmaps
            </div>
          </div>
        </div>
        <div className="absolute h-[16.39%] w-full top-[0%] right-[0%] bottom-[83.61%] left-[0%] text-white">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={mainBanner}
          />
          <div className="absolute top-[40.31rem] left-[17.81rem] rounded-4xl bg-forestgreen h-[3.88rem] flex flex-row py-[0.81rem] px-[3rem] box-border items-center justify-center">
            <b className="relative leading-[130%]">Register Here</b>
          </div>
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
          <div className="absolute top-[19rem] left-[17.63rem] leading-[140%] text-black inline-block w-[62.81rem] text-[5rem] font-alfa-slab-one">
            <p className="m-0">
              <span>
                <span>CareerCompass</span>
              </span>
            </p>
            <p className="m-0 text-[1.75rem] font-alice">
              Guiding Your Path: Where Education Meets Career
            </p>
          </div>
        </div>
        <div className="absolute top-[176.5rem] left-[0rem] w-[120rem] h-[55.94rem] text-center text-[2.56rem] font-alfa-slab-one">
          <div className="absolute top-[0rem] left-[0rem] bg-honeydew w-[120rem] h-[55.94rem]" />
          <div className="absolute top-[6.06rem] left-[calc(50%_-_477px)] w-[57.63rem] h-[6.06rem]">
            <div className="absolute top-[0rem] left-[calc(50%_-_461px)] leading-[140%] inline-block w-[57.63rem]">
              <p className="m-0">TEAM</p>
              <p className="m-5 text-[2.6rem] font-alice">
                Crafting Innovation with Passion and Expertise
              </p>
            </div>
          </div>
          <div className="absolute top-[18.69rem] left-[11.81rem] w-[91.56rem] h-[33.06rem] text-[2rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[17.56rem] h-[33.06rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-white w-[17.56rem] h-[33.06rem]" />
              <img
                className="absolute h-[13.23%] w-[56.98%] top-[75.24%] right-[25.22%] bottom-[11.53%] left-[17.79%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={social}
              />
              <div className="absolute top-[16.19rem] left-[calc(50%_-_118.5px)] w-[14.75rem] h-[6.06rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_118px)] leading-[140%] inline-block w-[14.75rem]">
                  <p className="m-0">
                    <span>
                      <span>Kailash</span>
                    </span>
                  </p>
                  <p className="m-0 text-[1.75rem] font-alice">AI/ML Expert</p>
                </div>
              </div>
              <img
                className="absolute top-[3.06rem] left-[3.13rem] w-[11.25rem] h-[11.25rem]"
                alt=""
                src={teamphoto1}
              />
            </div>
            <div className="absolute top-[0rem] left-[24.38rem] w-[17.56rem] h-[33.06rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-21xl bg-white w-[17.56rem] h-[33.06rem]" />
              <img
                className="absolute h-[13.23%] w-[56.98%] top-[75.24%] right-[25.58%] bottom-[11.53%] left-[17.44%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={social}
              />
              <div className="absolute top-[18.19rem] left-[calc(50%_-_118.5px)] w-[14.75rem] h-[6.06rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_118px)] leading-[140%] inline-block w-[14.75rem]">
                  <p className="m-0">
                    <span>
                      <span>Kashish</span>
                    </span>
                  </p>
                  <p className="m-0 text-[1.75rem] font-alice">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <img
                className="absolute top-[3.06rem] left-[3.13rem] w-[11.25rem] h-[11.25rem]"
                alt=""
                src={teamphoto2}
              />
            </div>
            <div className="absolute top-[0rem] left-[49.25rem] w-[17.56rem] h-[33.06rem]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-21xl w-[17.56rem] h-[33.06rem]"
                alt=""
                src={teamCardRectangle}
              />
              <img
                className="absolute h-[13.23%] w-[56.98%] top-[75.24%] right-[19.88%] bottom-[11.53%] left-[23.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={social}
              />
              <div className="absolute top-[18.19rem] left-[calc(50%_-_115.5px)] w-[14.75rem] h-[6.06rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_118px)] leading-[140%] inline-block w-[14.75rem]">
                  <p className="m-0">
                    <span>
                      <span>Himanshu</span>
                    </span>
                  </p>
                  <p className="m-0 text-[1.75rem] font-alice">
                    Full Stack Dev
                  </p>
                </div>
              </div>
              <img
                className="absolute top-[3.06rem] left-[3.13rem] w-[11.25rem] h-[11.25rem]"
                alt=""
                src={teamphoto3}
              />
            </div>
            <div className="absolute top-[0rem] left-[74rem] w-[17.56rem] h-[33.06rem]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-21xl w-[17.56rem] h-[33.06rem]"
                alt=""
                src={teamCardRectangle}
              />
              <img
                className="absolute h-[13.23%] w-[56.98%] top-[75.24%] right-[23.09%] bottom-[11.53%] left-[19.93%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={social}
              />
              <div className="absolute top-[18.19rem] left-[calc(50%_-_115.5px)] w-[14.75rem] h-[6.06rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_118px)] leading-[140%] inline-block w-[14.75rem]">
                  <p className="m-0">
                    <span>
                      <span>Shubham</span>
                    </span>
                  </p>
                  <p className="m-0 text-[1.75rem] font-alice">{`UI/UX & Frontend`}</p>
                </div>
              </div>
              <img
                className="absolute top-[3.06rem] left-[3.19rem] w-[11.25rem] h-[11.25rem]"
                alt=""
                src={teamphoto4}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[145.19rem] left-[0rem] w-[120rem] h-[37.06rem] text-[2.56rem] font-alfa-slab-one">
          <img
            className="absolute top-[0rem] left-[0rem] w-[120rem] h-[40.06rem] object-cover"
            alt=""
            src={aboutUsBg}
          />
          <div className="absolute top-[5.85rem] left-[51.06rem] leading-[140%] inline-block w-[57.63rem] h-[23rem]">
            <p className="m-0">ABOUT US</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-[1.50rem] font-alice">
              At Career Compass, we are on a mission to bridge the gap between
              education and career aspirations. Our platform is designed to
              provide personalized guidance and support to students as they
              navigate the complexities of choosing the right career path. With
              a deep understanding of the evolving job landscape and the
              importance of skill development, we are here to empower you to
              make informed decisions that shape your future.
            </p>
          </div>
        </div>
        <div className="absolute top-[99.31rem] left-[0rem] w-[120rem] h-[39.88rem] text-[4.56rem] font-alfa-slab-one">
          <div className="absolute top-[0rem] left-[0rem] bg-honeydew w-[120rem] h-[45.88rem]" />
          <div className="absolute top-[3.25rem] left-[12.06rem] w-[102rem] h-[33.63rem]">
            <div className="absolute top-[22.38rem] left-[0rem] w-[11.25rem] h-[11.25rem]">
              <div className="absolute top-[5rem] left-[0rem] rounded-[50%] bg-forestgreen w-[11.25rem] h-[11.25rem]" />
              <div className="absolute top-[5.94rem] left-[0.94rem] rounded-[50%] bg-white w-[9.38rem] h-[9.38rem]" />
              <div className="absolute top-[7.44rem] left-[2.75rem] leading-[140%] inline-block w-[5.81rem] h-[6.38rem]">
                10
              </div>
            </div>
            <div className="absolute top-[7.94rem] left-[2.31rem] leading-[140%] inline-block w-[57.63rem] text-[2.56rem]">
              <p className="m-0">NO. OF STUDENTS REGISTERED</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-[1.75rem] font-alice">
                Join a growing community of ambitious students who have already
                taken the first step towards a brighter future. Our platform has
                welcomed 10 students and counting.
              </p>
            </div>
            <img
              className="absolute top-[1rem] left-[57rem] w-[45rem] h-[31.19rem] object-cover"
              alt=""
              src={noofstudentsregisteredphoto}
            />
          </div>
        </div>
      </div>
    </>
  );
}
