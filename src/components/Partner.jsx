import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import for optional icons (optional)

const Partner = () => {
  return (
    <section className="bg-gray-200 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-xl text-black font-bold mb-4 opacity-90 hover:opacity-100 transition duration-300">
          INTER AGENCIES TASK FORCE
        </h3>
        <p className="text-2xl text-gray-900 opacity-80">
          <h2>IATF</h2>
        </p>
      </div>

      {/* Partner Logos */}
      <div className="flex justify-center gap-12 flex-wrap opacity-90 hover:opacity-100 transition duration-300">
        {/* Partner Logos */}
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //   src="https://pakobserver.net/wp-content/uploads/2021/02/ANF.jpg"
            alt="Partner 1"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvfTGRRYdxLRslEVKznAEzFAAtHGPddVPBQ&s"
            alt="Partner 2"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //     src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pakistan_Army_Emblem.png/1024px-Pakistan_Army_Emblem.png"
            alt="Partner 3"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjHF6PFE-iQC50E4WtJ1GCa_S7PxaWBJyHgn52b628IAgsAt9nW2-pKRea_ijS2OEAYU&usqp=CAU"
            alt="Partner 4"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //   src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/KPK_Police_Logo.svg/1200px-KPK_Police_Logo.svg.png"
            alt="Partner 5"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
        <div className="w-32 h-32 bg-white flex justify-center items-center rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            //   src="https://upload.wikimedia.org/wikipedia/en/1/1d/Capital_Territory_Police.png"
            alt="Partner 6"
            className="w-20 h-20 object-contain transition duration-300"
          />
        </div>
      </div>

      {/* Optional Arrow */}
      <div className="flex justify-center mt-6">
        <button className="text-black text-xl flex items-center space-x-2">
          <span>Explore More</span>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Partner;
