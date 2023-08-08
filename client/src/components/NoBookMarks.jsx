import nobkm from "../assets/nobkm.svg"

export default function NoBookMarks() {
  return (
    <div className="flex flex-col mx-[25rem] mb-[10rem] gap-3">
      <div className="flex justify-center items-center">
        <div><img className="w-24 h-24" src={nobkm} alt="" /></div>
      </div>
      <div className="text-3xl">
        Oops! You forgot to bookmark
      </div>
    </div>
  );
}