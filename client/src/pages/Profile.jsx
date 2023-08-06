import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Sidebar"; 
import RoadmapStep from "../components/RoadmapStep";
import Card from "../components/Card";
import profileImg from "../assets/profileimg.png";
import bookmark from "../assets/bookmark.svg";
import book from "../assets/book.svg";  
import yt from "../assets/yt.png";
import roadmap from "../assets/roadmap.png"

export default function Profile() {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // return (
  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   )
  // )

    return (
      <div className="mb-[75.625rem] flex">
        <div className="col-1 max-w-[26.9375rem] max-h-[54rem] ml-[17.5rem] mt-[5.1875rem] mr-[2.875rem]">
          <Sidebar 
          img = {profileImg}
          name = "Name"
          email = "Email"
          location = "Location"
          interest = "Interest"
          aspiration = "Aspiration"
          education = "Education Level"
          />
        </div>
        <div className="col-2 pl-8 mt-[5.1875rem]">
          <div className="bookmark flex">
          <img className="w-[3.75rem] h-[3.75rem]" src={bookmark} alt="" />
          
            <div className="font-bold text-3xl ml-[0.815rem]">BOOKMARKS</div>
            <div className="view-more ">
              <button className="text-[#3240F5] text-2xl ml-[29.25rem]">View More</button>
            </div>
            
          </div>
          <div className="steps mt-8 flex gap-4">
            <div className="mt-[11px]"><img src={roadmap} alt="" /></div>
            <div className="step-con flex flex-col gap-5">
            <div className="text-3xl mt-6 font-bold">SOFTWARE ENGINEER - ROADMAP</div>
            <RoadmapStep 
            number = "1"
            content = "Master programming languages like Python, Java, or C++."
            />
            <RoadmapStep 
            number = "2"
            content = "Master programming languages like Python, Java, or C++."
            />
            <RoadmapStep 
            number = "3"
            content = "Master programming languages like Python, Java, or C++."
            />
            <RoadmapStep 
            number = "4"
            content = "Master programming languages like Python, Java, or C++."
            />
            <RoadmapStep 
            number = "5"
            content = "Master programming languages like Python, Java, or C++."
            />
            </div>
          </div>
          <div className="book flex gap-4 mt-[45px]">
            <div className="w-[65px] h-[65px]">
              <img src={book} alt="" />
            </div>
            <div className="book-con flex flex-col gap-4">
              <div className="text-3xl font-bold flex items-center">SOFTWARE ENGINEER - BOOKS</div>
                <Card 
                title="Full Stack Web Development For Beginners"
                content="This book is written for absolute beginners who want to become full stack web application developer."
                type="price"
                priceAmount="Rs 4599.00"
                link="Amazon.in"
                />
            </div>
          </div>
          <div className="yt flex gap-4 mt-[45px]">
            <div className="">
              <img src={yt} alt="" />
            </div>
            <div className="yt-con flex flex-col gap-4">
            <div className="text-3xl font-bold flex items-center">SOFTWARE ENGINEER - YOUTUBE</div>
            <Card 
                title="Complete Web Developer Bootcamp"
                content="Web Development Tutorials"
                type="yt"
                />
                </div>
          </div>
        </div>
      </div>
    )
}
