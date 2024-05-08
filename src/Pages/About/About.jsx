import "./About.css";
import exampleImage from "../../assets/example.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <section className="introduction overflow-x-hidden">
      <Header />

      <div className="titl flex flex-col pt-12 pl-4  ">
        <div className="text text-center b">
          <h1 className="text-Blue uppercase font-bold text-5xl tracking-normal ">
            cinkod <span className="text-Yellow uppercase">developer</span>{" "}
            community
          </h1>
          <br />
          <h2 className="text-Yellow ">
            We are happy to have you, find your college here.{" "}
          </h2>
          <br />
          <p className="text-white">
            A vibrant tech community crafted for students, where the sparks of
            code meet creativity. It’s a place where learning and <br />
            collaborationthrive, empowering students to turn their digital
            dreams into reality. In the heart of CINKOD, every <br />
            student finds a path to grow, connect, and innovate.
          </p>
        </div>
      </div>
      <div className="title flex flex-col bg-red-400">
        {/* Your title content */}
      </div>
      <div className="cards flex flex-wrap justify-center py-6 px-24">
        {/* Displaying the cards */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
          >
            {/* Your card content */}
            <div className="w-full h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 bg-gray-300 mx-auto"></div>
          </div>
        ))}
      </div>
      <div>
        <div className="quotes text-center">
          <p className="text-white text-1xl font-semibold pt-8">
            <span className="text-Blue font-bold ">"</span>Bacon ipsum dolor
            amet tri-tip biltong kielbasa pancetta picanha <br />
            tenderloinspan<span className="text-Blue">"</span>
          </p>
          <p className="text-Blue font-extrabold">
            _ A community to help you grow for future challenges.
          </p>
        </div>
        <br />
        <div className="title flex flex-col py-2 pl-8">
          {/* Your title content */}
        </div>
        <div className="flexCenter paddings innerWidth text-justify">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full sm:w-3/4 h-auto flex justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md p-8">
              <div className="content flex flex-col">
                <h1 className="text-black text-center font-bold text-3xl pb-4">
                  Open Cinkod community in your college
                </h1>
                <p className="text-blue flex justify-start mx-4 font-medium">
                  Empower your students to become the next generation of tech
                  leaders by bringing the Cinkod Developer Community to your
                  college. Cinkod bridges the gap between academia and industry,
                  equipping students with the essential skills for Industry 5.0
                  and fostering a pipeline of future-ready talent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="title flex flex-col py-10 pt-12 pl-8">
        
        </div>
        <div className="aboutus-text text-white flex flex-col text-justify mx-4 lg:overflow-x-hidden md:mx-96">
          <h1 className="font-bold text-2xl mb-5">ABOUT US</h1>
          <p>
            The CINKOD Developer Community, a pioneering initiative by CINKOD
            Technologies Pvt Ltd, is dedicated to nurturing and empowering
            student developers across India. We operate at the forefront of
            Industry 5.0, a dynamic landscape demanding new innovators and
            leaders. Our vision is to cultivate the future generation, providing
            them with the essential skills and resources they need to excel in
            transformative fields like Artificial Intelligence, Data Science,
            and IoT.
          </p>
          <br />

          <p>
            By equipping students with the right knowledge, technical expertise,
            and real-world opportunities, CINKOD bridges the gap between
            academia and industry. We foster a pipeline of talent that is not
            only adept but also possesses the vision and social consciousness to
            drive positive change. Our unwavering commitment to innovation,
            collaboration, and skill development positions CINKOD as a
            nationwide beacon for aspiring student developers. We are paving the
            way for a new era of technological advancement and societal impact,
            one empowered student at a time.
          </p>

          <br />
          <p>
            Through a carefully designed curriculum, workshops, and mentorship
            programs, CINKOD provides students with the tools they need to
            translate their ideas into reality. We connect them with industry
            leaders and peers, fostering a collaborative environment that sparks
            creativity and innovation. Our dedication to cultivating a diverse
            and inclusive community ensures that all students have the
            opportunity to thrive and make their mark on the technological
            landscape.
          </p>
          <br />
          <p>
            {
              "CINKOD Developer Community is more than just a platform for learning; it's a springboard for launching the next generation of tech pioneers. We are committed to shaping a future driven by innovation, social responsibility, and the boundless potential of our student developers. "
            }
          </p>
        </div>

        <div className="flex justify-center items-center mt-7 text-white">
          <div className="flex flex-col md:flex-row mx-4 md:mx-96">
            <div className="md:w-1/2 md:pr-4">
              <img
                src={exampleImage}
                alt="Description of your image"
                className="w-full h-auto "
              />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <h2 className="text-2xl font-bold mb-4">
                {"We are "}
                <span className="text-Blue">
                  {"committed to towards the development "}
                  
                </span> 
                {"of your skills and activity."}
                
              </h2>
              <p className="text-lg text-justify">
                We're your tech success squad! We're passionate about helping
                students like you reach their full potential and thrive in the
                real world. We do this by developing your skills and supporting
                your projects, providing the resources and guidance you need to
                turn your ideas into reality.
              </p>
            </div>
          </div>
        </div>
        <p className="text-white w-full md:w-1/2 text-justify mt-7 mx-4 md:mx-96">
          We're the Cinkod Developer Community team, and we share a deep passion
          for igniting the potential of student developers. Our mission is to
          equip you with the skills and resources you need to thrive in the
          ever-evolving tech landscape. We believe in fostering your ideas and
          supporting your activities, providing the tools and guidance to turn
          your dreams into reality. 
          
         </p>
      </div>
      <br />
      <div className="guildlines flex flex-col mx-4 w-full md:mx-96">
        <h1 className="font-normal text-Yellow text-4xl">CINKOD</h1>
        <h1 className="font-normal text-Blue text-2xl mb-5">
          COMMUNITY GUIDELINES
        </h1>
        <div className="font-normal text-white text-xl">
          <a
            href="#"
            className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
          >
            <h1 className="inline-block">
              Community Guideline
              <span className="inline-block ml-2 text-blue-500">+</span>
            </h1>
          </a>
          <a
            href="#"
            className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
          >
            <h1 className="inline-block">
              Privacy Policy
              <span className="inline-block ml-2 text-blue-500">+</span>
            </h1>
          </a>
          <a
            href="#"
            className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
          >
            <h1 className="inline-block">
              Terms and Condition
              <span className="inline-block ml-2 text-blue-500">+</span>
            </h1>
          </a>
        </div>
      </div>

      <div className="flexCenter paddings innerWidth">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/4 h-auto flex flex-col justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md p-8">
            <div className="content flex flex-col">
              <h1 className="text-black text-center font-bold text-3xl pb-4">
                Supported By:
              </h1>
              <div className="supporters flex justify-center items-center flex-col sm:flex-row">
                <img
                  src={exampleImage}
                  alt="Supporter 1"
                  className="w-1/4  h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
                />
                <img
                  src={exampleImage}
                  alt="Supporter 2"
                  className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
                />
                <img
                  src={exampleImage}
                  alt="Supporter 3"
                  className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
                />
                <img
                  src={exampleImage}
                  alt="Supporter 4"
                  className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
