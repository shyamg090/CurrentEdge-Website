import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const categories = [
    { name: "General", id: "general" },
    { name: "Business", id: "business" },
    { name: "Entertainment", id: "entertainment" },
    { name: "Health", id: "health" },
    { name: "Science", id: "science" },
    { name: "Sports", id: "sports" },
    { name: "Technology", id: "technology" },
  ];

  const newsItems = [
    {
      title: "Example News Title",
      description: "This is an example news description.",
      link: "https://example.com",
      source: "News Source",
      publishedAt: "2024-11-16",
      imageUrl: "https://via.placeholder.com/300",
    },
    // Add more news items here
  ];

  return (
    <div className="min-h-screen bg-white text-black font-['FoundersGroteskCond']">

      <div className="relative w-[100%] h-[4rem] flex justify-between items-center">
        <nav className="absolute z-10 top-0 w-[100%] flex flex-col items-start justify-start pt-4 gap-4">
          {
            menuOpen ? <FiX className="text-[2rem] ml-4" onClick={toggleMenu} /> : <FiMenu className="text-[2rem] ml-4" onClick={toggleMenu} />
          }
          {
            menuOpen ? <div className="flex w-[100%]">
              <div className="flex flex-col items-start justify-start gap-8 w-[80%] md:w-[30%] h-[100vh] bg-white text-black" >
                
                <div className="lg:hidden">
                  <button>login</button>
                  <button className="bg-black text-white p-3 rounded-md">Signup</button>
                </div>

                {
                  categories.map((item, id) => {
                    return <div className="border-b-2 w-full p-4" key={id}>
                      <h1 className="text-[1.2rem] font-bold font-Opensans">{item.name}</h1>
                    </div>
                  })
                }
              </div>

              <div className="lg:w-[100%] h-[100vh] bg-black opacity-15">
              </div>
            </div> : <></>
          }
        </nav>

        <img href=""></img>

        <div className="p-2 hidden lg:flex gap-8 text-[1.1rem]">
          <button>login</button>
          <button className="bg-black text-white p-3 rounded-md hover:bg-gray-400">Signup</button>
        </div>
      </div>
      <main className="p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded overflow-hidden bg-gray-900"
            >
              {/* Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${news.imageUrl})` }}
              ></div>

              {/* Content */}
              <div className="p-4">
                <div className="font-bold text-sm text-gray-400">
                  {news.source} &bull; {news.publishedAt}
                </div>
                <h2 className="text-lg font-semibold mt-2">{news.title}</h2>
                <p className="text-gray-300 mt-2">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
