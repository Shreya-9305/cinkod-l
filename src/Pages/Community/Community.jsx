import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const cards = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: index % 2 === 0 ? "Category A" : "Category B",
    tags: ["Tag A", "Tag B"],
  }));

  
  const filterByCategory = (event) => {
    const category = event.target.value;
    setSelectedCategory(category === "All Categories" ? null : category);
    setSelectedTag(null); 
  };

  const filterByTag = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag === "All Tags" ? null : tag);
    setSelectedCategory(null);
  };

 
  const cardMatchesFilters = (card) => {
    if (selectedCategory && card.category !== selectedCategory) {
      return false;
    }
    if (selectedTag && !card.tags.includes(selectedTag)) {
      return false;
    }
    return true;
  };

  return (
    <section className="community relative">
      <Header />

      <div className="text-white text-center mt-20 font-bold text-4xl ">
        <h1>Welcome to</h1>
        <h1 className="text-Blue">
          CINKOD <span className="text-Yellow">DEVELOPER</span> COMMUNITY
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/5 px-4 py-2 mt-3 mb-7 border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center mb-12  rounded-lg ">
        <div className="w-full md:w-4/5 lg:w-3/4 mb-12 bg-gradient-to-br from-Blue/20 to-transparent rounded-lg py-10 px-10">
        <div className="flex justify-between mt-2">
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      Back
    </button>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      Next
    </button>
  </div>
          <div className="flex justify-center  mb-4">
            {/* First dropdown button */}
            <select className="mr-4 px-4 py-2 bg-white border border-gray-300 rounded-md">
              <option value="option1">Categories</option>
            </select>
            {/* Second dropdown button */}
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-md">
              <option value="option1">Tags</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative  ">
            {cards.map(
              (card) =>
                cardMatchesFilters(card) && (
                  <div
                    key={card.id}
                    className="relative bg-slate-900 rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={`https://via.placeholder.com/150?text=Image${card.id}`}
                      alt={`Image${card.id}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-lg text-white font-semibold mb-2">
                        {card.title}
                      </h2>
                      <h2 className="text-lg text-Yellow font-normal mb-2">
                        College name
                      </h2>
                      <p className="text-white">{card.description}</p>
                      <div className="flex flex-col mt-2">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded">
                          
                          <a href="/Event">RSVP</a>
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </section>
  );
};

export default Community;
