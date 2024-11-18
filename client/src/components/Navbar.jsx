import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
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

  return (
      <div className="bg-white relative w-[100%] h-[4rem] flex justify-between items-center">
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

              <div className="lg:w-[100%] h-[100vh] bg-black opacity-15" onClick={toggleMenu}>
              </div>
            </div> : <></>
          }
        </nav>

        <img href=""></img>

        <div className="p-2 mr-3 hidden lg:flex gap-8 text-[1.1rem]">
          <button>login</button>
          <button className="bg-black text-white p-3 hover:bg-gray-400">Signup</button>
        </div>
      </div>
  );
};

export default Navbar;
