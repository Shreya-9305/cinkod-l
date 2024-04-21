import React from "react";
import "./Event.css";
import exampleImage from "../../assets/event.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Event = () => {
  return (
    <section className="event-display">
      <Header />
      <div className="text-white text-center font-bold text-4xl py-8 ">
        <h1>Welcome to</h1>
        <h1 className="text-Blue">
          CINKODE <span className="text-Yellow">DEVELOPER</span> COMMUNITY
        </h1>
      </div>

      <div className="h-auto max-w-screen-lg mx-auto bg-gradient-to-br from-Blue/20 to-transparent rounded-3xl px-20">
        <button></button>

        <h1 className="text-white font-bold text-3xl  py-8">Event Name</h1>
        <div className="flex justify-start">
          <img
            src={exampleImage}
            alt="Description of your image"
            className="w-auto max-h-60 mx-3"
          />
          <h1 className="text-white font-normal text-2xl px-2 text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            vel rerum laborum ea explicabo eos, cumque porro odio nihil
            excepturi commodi nisi dolor Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ut, nesciunt!
          </h1>
        </div>
        <h1 className="text-white font-bold text-3xl  py-8 ">
          About the event
        </h1>
        <div className="text-white flex justify-center flex-col ">
          {" "}
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

        <div className="innerWidth py-8">
          <h1 className="text-white font-bold text-3xl ">Venue Details</h1>
          <div className="flex flex-row  py-2 text-white font-normal ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
              harum dolores tenetur dolorem libero.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
              harum dolores tenetur dolorem libero.
            </p>
          </div>
          <div className="flex flex-row justify-between py-8 text-white text-center">
            <div className="text-center">
              <img
                src={exampleImage}
                alt="Supporter 1"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p>Organiser</p>
            </div>
            <div className="text-center">
              <img
                src={exampleImage}
                alt="Supporter 1"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p>Organiser</p>
            </div>
            <div className="text-center">
              <img
                src={exampleImage}
                alt="Supporter 1"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p>Organiser</p>
            </div>
            <div className="text-center">
              <img
                src={exampleImage}
                alt="Supporter 1"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p>Organiser</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <button className="bg-transparent text-Blue border-2 border-Blue w-24 flex justify-center ">
            RSVP
          </button>
          <a
            href="#"
            className="text-Yellow text-2xl font-medium flex justify-center py-8 underline"
          >
            CLICK HERE FOR MORE DETAILS
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Event;
