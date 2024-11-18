import { FaBookmark } from "react-icons/fa6";

const NewsPanelSide = () => {
  return (
    <div className="max-w-[20rem] border-b-2 border-b-gray-400 pb-2">
      <div
        className="h-[10rem] bg-cover bg-center shadow-md"
        style={{
          backgroundImage: `url("https://th-i.thgim.com/public/incoming/9d5w6j/article68880778.ece/alternates/LANDSCAPE_1200/2024-11-17T175423Z_1082010590_RC2Q4BACDREY_RTRMADP_3_INDIA-POLLUTION.JPG")`,
        }}
      ></div>

      <div className="mt-4 flex flex-col gap-3 text-black">

        <h1 className="text-lg font-bold hover:underline">
          Zinka Logistics IPO crosses halfway mark
        </h1>

        <h2 className="text-sm text-gray-600">
          Bengaluru-based Zinka Logistics selling shares at ₹259-273 apiece.
        </h2>

        <div className="flex items-center justify-between text-gray-500 mt-2 space-x-2 text-sm">
         <div className="flex gap-2">
         <h2>Business Today</h2>
          <div>|</div>
          <h2> 2 hours ago </h2>
         </div>
          <FaBookmark className="text-[1.5rem] mr-2 text-black"/>
        </div>
      </div>
    </div>
  );
};

export default NewsPanelSide;
