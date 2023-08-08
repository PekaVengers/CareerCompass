import loaderImage from "../assets/images/loader.png"
import "../index.css"

export default function Loader() {
  return (
    <div className="h-[63vh] flex flex-col justify-center items-center">
      <img src={loaderImage} alt="loading" className="loader"/>
      <h3 className="font-inter text-[2rem]">Please Wait ... We are processing your data...</h3>
    </div>
  );
}