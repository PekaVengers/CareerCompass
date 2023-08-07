import mainBanner from "../assets/images/mainBanner.png";
import serviceOne from "../assets/images/serviceOne.png";
import serviceTwo from "../assets/images/serviceTwo.png";
import serviceThree from "../assets/images/serviceThree.png";
import serviceFour from "../assets/images/serviceFour.png";
import registeredStudents from "../assets/images/registeredStudents.png";
import registeredCount from "../assets/images/registeredCount.png";
import aboutUs from "../assets/images/aboutUs.png";
import social from "../assets/images/social.png";
import teamAvatar1 from "../assets/images/teamAvatar1.png";
import teamAvatar2 from "../assets/images/teamAvatar2.png";
import contactSvg from "../assets/images/contactSvg.png";
import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <>
      <div className="mainBanner relative w-[100vw]">
        <img src={mainBanner} alt="mainBanner" />
        <div className="main absolute top-[20rem] h-[50%] left-[20rem]  flex flex-col justify-between">
          <div className="mainBannerText">
            <h1 className="font-alfa text-[5rem]">CareerCompass</h1>
            <h5 className="font-alice text-[1.7rem]">
              Guiding Your Path: Where Education Meets Career
            </h5>
          </div>
          <div className="buttonMainBanner">
            <LoginButton text={"Register Now"} />
          </div>
        </div>
      </div>
      {/* <div style={{backgroundImage: `url(${mainBanner})`}}></div> */}

      {/* Services  */}
      <div className="services h-[70vh] flex flex-col justify-center items-center">
        <h1 className="font-alfa mb-4 text-[3rem]">SERVICES</h1>
        <h4 className="font-alice w-[60%] text-[1.8rem] text-center">
          We are dedicated to helping you unlock your potential, discover your
          strengths, and align your education with your passions
        </h4>
        <div className=" mt-8 px-[8rem] flex justify-evenly flex-wrap h-[65%] w-[100%]">
          <div className="serviceCard relative w-[16%] h-[100%] flex flex-col items-center">
            <div className="serviceImage absolute top-0 z-[10000] bg-white h-[10rem] w-[10rem] border-[0.8rem] border-[#fff] rounded-[50%]">
              <img src={serviceOne} alt="service" />
            </div>
            <div className="serviceName absolute bottom-0 z-1 bg-[#CFFFD9] h-[18.75rem] w-[17.87rem] border-3 border-green-600 rounded-[1.2rem]">
              <div className="servName h-[100%] w-[100%] flex justify-center items-center">
                <h2 className="font-alfa w-[70%] text-[1.5rem] text-center">
                  AI-Powered Skill Matching
                </h2>
              </div>
            </div>
          </div>
          <div className="serviceCard relative w-[16%] h-[100%] flex flex-col items-center">
            <div className="serviceImage absolute top-0 z-[10000] bg-white h-[10rem] w-[10rem] border-[0.8rem] border-[#fff] rounded-[50%]">
              <img src={serviceTwo} alt="service" />
            </div>
            <div className="serviceName absolute bottom-0 z-1 bg-[#CFFFD9] h-[18.75rem] w-[17.87rem] border-3 border-green-600 rounded-[1.2rem]">
              <div className="servName h-[100%] w-[100%] flex justify-center items-center">
                <h2 className="font-alfa w-[70%] text-[1.5rem] text-center">
                  Resource-Rich Learning
                </h2>
              </div>
            </div>
          </div>
          <div className="serviceCard relative w-[16%] h-[100%] flex flex-col items-center">
            <div className="serviceImage absolute top-0 z-[10000] bg-white h-[10rem] w-[10rem] border-[0.8rem] border-[#fff] rounded-[50%]">
              <img src={serviceThree} alt="service" />
            </div>
            <div className="serviceName absolute bottom-0 z-1 bg-[#CFFFD9] h-[18.75rem] w-[17.87rem] border-3 border-green-600 rounded-[1.2rem]">
              <div className="servName h-[100%] w-[100%] flex justify-center items-center">
                <h2 className="font-alfa w-[70%] text-[1.5rem] text-center">
                  Community of Experts
                </h2>
              </div>
            </div>
          </div>
          <div className="serviceCard relative w-[16%] h-[100%] flex flex-col items-center">
            <div className="serviceImage absolute top-0 z-[10000] bg-white h-[10rem] w-[10rem] border-[0.8rem] border-[#fff] rounded-[50%]">
              <img src={serviceFour} alt="service" />
            </div>
            <div className="serviceName absolute bottom-0 z-1 bg-[#CFFFD9] h-[18.75rem] w-[17.87rem] border-3 border-green-600 rounded-[1.2rem]">
              <div className="servName h-[100%] w-[100%] flex justify-center items-center">
                <h2 className="font-alfa w-[70%] text-[1.5rem] text-center">
                  Personalized Career Roadmaps
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Students Registered  */}
      <div className="services h-[70vh] bg-[#CFFFD9] flex justify-center items-center">
        <div className="left w-[45%] h-[80%] pt-[3rem]">
          <h1 className="font-alfa text-[3rem]">NO. OF STUDENTS REGISTERED</h1>
          <p className="font-alice mt-[3rem] text-[1.8rem]">
            Join a growing community of ambitious students who have already
            taken the first step towards a brighter future. Our platform has
            welcomed 10 students and counting.
          </p>
          <div className="count">
            <div className=" h-[10rem] w-[10rem] mt-[3rem]">
              <img src={registeredCount} alt="service" />
            </div>
          </div>
        </div>
        <div className="right w-[30%] h-[80%] flex items-center ">
          <img className="" src={registeredStudents} alt="registeredstudents" />
        </div>
      </div>

      {/* About Us  */}
      <div className="aboutUs h-[60vh] flex justify-center items-center">
        <div className="">
          <img src={aboutUs} alt="aboutUsSvg" className="w-[28rem] h-[28rem]" />
        </div>
        <div className="aboutText right-0 w-[50%] flex flex-col justify-center pl-[8rem]">
          <h1 className="font-alfa text-[3rem]">ABOUT US</h1>
          <p className="font-alice text-[1.8rem] w-[90%] mt-8">
            At Career Compass, we are on a mission to bridge the gap between
            education and career aspirations. Our platform is designed to
            provide personalized guidance and support to students as they
            navigate the complexities of choosing the right career path. With a
            deep understanding of the evolving job landscape and the importance
            of skill development, we are here to empower you to make informed
            decisions that shape your future.
          </p>
        </div>
      </div>

      {/* Team  */}
      <div className="team bg-[#CFFFD9] h-[90vh] w-[100vw] flex flex-col items-center justify-center">
        <div className="teamText text-center">
          <h1 className="font-alfa text-[3rem]">TEAM</h1>
          <h4 className="font-alice text-[1.8rem]">
            Crafting Innovation with Passion and Expertise
          </h4>
        </div>
        <div className="teamCards h-[70%] w-[100%] flex justify-evenly items-center px-[10rem]">
          <div className="teamCard bg-white flex flex-col justify-center items-center py-8 h-[70%] w-[17%] rounded-[3rem]">
            <div className="h-[7rem] w-[7rem] border-[0.5rem] border-[#43B14B] rounded-[50%]">
              <img src={teamAvatar1} className="rounded-[50%]" alt="service" />
            </div>
            <div className="mt-[2rem]">
              <h1 className="name text-[2rem] font-alfa text-center">
                Kailash
              </h1>
              <h3 className="role font-alice text-[1.5rem] text-center">
                Backend Dev
              </h3>
            </div>
            <img
              src={social}
              className="w-[45%] h-[15%] mt-[2rem]"
              alt="socials"
            />
          </div>
          <div className="teamCard bg-white flex flex-col justify-center items-center py-8 h-[70%] w-[17%] rounded-[3rem]">
            <div className="h-[7rem] w-[7rem] border-[0.5rem] border-[#43B14B] rounded-[50%]">
              <img src={teamAvatar2} className="rounded-[50%]" alt="service" />
            </div>
            <div className="mt-[2rem]">
              <h1 className="name text-[2rem] font-alfa text-center">
                Kashish
              </h1>
              <h3 className="role font-alice text-[1.5rem] text-center">
                Graphics & Ui/Ux
              </h3>
            </div>
            <img
              src={social}
              className="w-[45%] h-[15%] mt-[2rem]"
              alt="socials"
            />
          </div>
          <div className="teamCard bg-white flex flex-col justify-center items-center py-8 h-[70%] w-[17%] rounded-[3rem]">
            <div className="h-[7rem] w-[7rem] border-[0.5rem] border-[#43B14B] rounded-[50%]">
              <img src={teamAvatar1} className="rounded-[50%]" alt="service" />
            </div>
            <div className="mt-[2rem]">
              <h1 className="name text-[2rem] font-alfa text-center">
                Himanshu
              </h1>
              <h3 className="role font-alice text-[1.5rem] text-center">
                Full Stack Dev
              </h3>
            </div>
            <img
              src={social}
              className="w-[45%] h-[15%] mt-[2rem]"
              alt="socials"
            />
          </div>
          <div className="teamCard bg-white flex flex-col justify-center items-center py-8 h-[70%] w-[17%] rounded-[3rem]">
            <div className="h-[7rem] w-[7rem] border-[0.5rem] border-[#43B14B] rounded-[50%]">
              <img src={teamAvatar1} className="rounded-[50%]" alt="service" />
            </div>
            <div className="mt-[2rem]">
              <h1 className="name text-[2rem] font-alfa text-center">
                Shubham
              </h1>
              <h3 className="role font-alice text-[1.5rem] text-center">
                Frontend & Ui/Ux
              </h3>
            </div>
            <img
              src={social}
              className="w-[45%] h-[15%] mt-[2rem]"
              alt="socials"
            />
          </div>
        </div>
      </div>

      {/* Contact Us  */}
      <div className="contact h-[70vh] w-[100vw] flex justify-center items-center ">
        <div className="image w-[30%] h-[80%] flex items-center justify-center">
          <img src={contactSvg} alt="contactSvg" />
        </div>
        <div className="form  w-[50%] h-[80%] flex flex-col justify-evenly">
          <h1 className="font-alfa text-[3rem] ">CONTACT US</h1>
          <input
            type="text"
            className="w-[80%] h-[2.5rem] rounded-[1rem] bg-[#CFFFD9] pl-[1rem] text-[1.5rem] font-alice"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-[80%] h-[2.5rem] rounded-[1rem] bg-[#CFFFD9] pl-[1rem] text-[1.5rem] font-alice"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-[80%] h-[5.5rem] rounded-[1rem] bg-[#CFFFD9] pl-[1rem] text-[1.5rem] font-alice"
            placeholder="Message"
          />
          <div>
            <button className="bg-[#43B14B] text-white font-inter font-bold px-[2rem] py-[0.6rem] rounded-[0.8rem]">
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
