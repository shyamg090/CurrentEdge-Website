import React from 'react'

const NewsPanelMain = () => {
  return (
    <div className="max-w-[40rem] border-b-2 border-b-gray-400 pb-2 m-4 lg:m-0">

    <div
      className="h-[20rem] bg-cover bg-center shadow-md"
      style={{
        backgroundImage: `url("https://th-i.thgim.com/public/incoming/9d5w6j/article68880778.ece/alternates/LANDSCAPE_1200/2024-11-17T175423Z_1082010590_RC2Q4BACDREY_RTRMADP_3_INDIA-POLLUTION.JPG")`,
      }}
    ></div>

    <div className="mt-4 flex flex-col gap-3 text-black">

      <h1 className="text-2xl font-bold hover:underline">
        Zinka Logistics IPO crosses halfway mark
      </h1>

      <h2 className="text-xl text-gray-600">
        Bengaluru-based Zinka Logistics selling shares at ₹259-273 apiece.
      </h2>

      <div className="flex items-center text-gray-500 mt-2 space-x-2 text-sm">
        <h2>Business Today</h2>
        <div>|</div>
        <h2> 2 hours ago </h2>
      </div>
    </div>
  </div>
  )
}

export default NewsPanelMain