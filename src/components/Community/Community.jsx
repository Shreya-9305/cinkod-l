import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  // Mock data for cards
  const cards = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: index % 2 === 0 ? "Category A" : "Category B",
    tags: ["Tag A", "Tag B"],
  }));

  // Function to filter cards based on selected category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setSelectedTag(null); // Clear selected tag
  };

  // Function to filter cards based on selected tag
  const filterByTag = (tag) => {
    setSelectedTag(tag);
    setSelectedCategory(null); // Clear selected category
  };

  // Function to check if a card matches the selected category and tag
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

      {/* Gradient Background */}
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#01A0E1] to-[#01A0E1] filter blur-[8rem] top-[25%] left-[20%] lg:left-[30%]"
        style={{ zIndex: "-1" }}
      ></div>
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-teal-500 to-yellow-400 filter blur-[8rem] top-[60%] left-[45%] lg:top-[55%] lg:left-[50%]"
        style={{ zIndex: "-1" }}
      ></div>

      <div className="text-white text-center mt-20 font-bold text-4xl ">
        <h1>Welcome to</h1>
        <h1 className="text-Blue">
          CINKODE <span className="text-Yellow">DEVELOPER</span> COMMUNITY
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/5 px-4 py-2 mt-3 mb-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center">
        {/* Category and Tag Tabs */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* Category Tab */}
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === null
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByCategory(null)}
          >
            All Categories
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "Category A"
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByCategory("Category A")}
          >
            Category A
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === "Category B"
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByCategory("Category B")}
          >
            Category B
          </button>
          {/* Tag Tab */}
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTag === null
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByTag(null)}
          >
            All Tags
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTag === "Tag A"
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByTag("Tag A")}
          >
            Tag A
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTag === "Tag B"
                ? "bg-slate-900  text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => filterByTag("Tag B")}
          >
            Tag B
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-12 ">
        <div className="w-full md:w-4/5 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative bg-gradient-to-br from-Blue/20 to-transparent  rounded-lg py-6 px-6">
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
                      <p className="text-white">{card.description}</p>
                      <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded mt-2">
                        <a href="/Event">View More</a>
                      </button>
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
