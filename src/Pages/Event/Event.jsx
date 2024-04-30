import React from "react";
import "./Event.css";
import exampleImage from "../../assets/event.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <section className="event-display">
      <Header />
      <div class="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl py-8 ">
        <h1>Welcome to</h1>
        <h1 class="text-Blue">
          CINKOD <span class="text-Yellow">DEVELOPER</span> COMMUNITY
        </h1>
      </div>
      <div class="h-auto bg-gradient-to-br from-Blue/20 to-transparent rounded-3xl mx-4 md:mx-32 px-5 md:px-20 w-full md:w-auto">
        <button
          class="border-2 border-Yellow text-Yellow px-2 py-2 mt-4"
          type="submit"
        >
          Back
        </button>

        <h1 class="text-white font-bold text-3xl py-8">Event Name</h1>
        <div class="flex flex-col md:flex-row justify-center md:justify-start items-center">
          <img
            src={exampleImage}
            alt="Description of your image"
            class="w-full max-h-96 mx-3"
          />
        </div>
        <h1 class="text-white font-bold text-3xl py-8">About the event</h1>
        <div class="text-white">
          <p>
            Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
            doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
            round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
            leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
            shoulder t-bone corned beef short ribs strip steak shankle cupim
            sausage.
          </p>
          <br />
          <p>
            Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
            doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
            round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
            leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
            shoulder t-bone corned beef short ribs strip steak shankle cupim
            sausage.
          </p>
        </div>

        <div class="innerWidth py-8">
          <h1 class="text-white font-bold text-3xl">Venue Details</h1>
          <div class="flex flex-col md:flex-row py-2 text-white font-normal">
            <p class="mb-4 md:mb-0 md:mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
              harum dolores tenetur dolorem libero.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
              harum dolores tenetur dolorem libero.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-around py-8 px-48 text-white text-center md:text-left">
            <div class="flex flex-wrap justify-center md:justify-between  w-full">
              <div class="flex flex-wrap justify-between md:justify-between mx-4">
                <div class="text-center mb-4 md:mb-0 relative">
                  <div class="relative inline-block px-8">
                    <img
                      src={exampleImage}
                      alt="Supporter 1"
                      class="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <a
                      href="YOUR_LINKEDIN_PROFILE"
                      class="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Organiser</p>
                </div>
                <div class="text-center mb-4 md:mb-0 relative">
                  <div class="relative inline-block px-8">
                    <img
                      src={exampleImage}
                      alt="Supporter 1"
                      class="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <a
                      href="YOUR_LINKEDIN_PROFILE"
                      class="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Organiser</p>
                </div>
                <div class="text-center mb-4 md:mb-0 relative px-8">
                  <div class="relative inline-block">
                    <img
                      src={exampleImage}
                      alt="Supporter 1"
                      class="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <a
                      href="YOUR_LINKEDIN_PROFILE"
                      class="absolute bottom-0 right-12 transform translate-x-1/2 translate-y-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Organiser</p>
                </div>
                <div class="text-center mb-4 md:mb-0 relative">
                  <div class="relative inline-block px-8">
                    <img
                      src={exampleImage}
                      alt="Supporter 1"
                      class="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <a
                      href="YOUR_LINKEDIN_PROFILE"
                      class="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Organiser</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center flex-col">
            <button class="bg-transparent text-Blue border-2 border-Blue w-24 flex justify-center">
              RSVP
            </button>
            <a
              href="#"
              class="text-Yellow text-2xl font-medium flex justify-center py-8 underline"
            >
              CLICK HERE FOR MORE DETAILS
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event;
