import {BsTwitter} from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">

      <div className="col-span-3 justify-start flex pt-8" > 
        <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">

        <BsTwitter className="text-3xl "/>
        </div>
        </div>

      <div className="col-span-6  border-r-[1px] border-l-[1px] border-r-slate-500"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
