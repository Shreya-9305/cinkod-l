import "./About.css";
import exampleImage from "../../assets/example.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <section className="introduction">
      <Header/>
      <div className="title flex flex-col py-10 pt-12 pl-8">
        <div className="text text-center">
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
            dreams into reality. In the heart of Cinkode, every <br />
            student finds a path to grow, connect, and innovate.
          </p>
        </div>
      </div>
      <div className="cards flex flex-row justify-center py-6 ">
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
        <div className="w-40 h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 mx-2 bg-gray-300"></div>
      </div>
      <div>
        <div className="quotes text-center">
          <p className="text-white text-1xl font-semibold py-4">
            <span className="text-Blue font-bold ">"</span>Bacon ipsum dolor
            amet tri-tip biltong kielbasa pancetta picanha <br />
            tenderloinspan<span className="text-Blue">"</span>
          </p>
          <p className="text-Blue font-extrabold">
            _ A community to help you grow for future challenges.
          </p>
        </div>
        <br />
        <div className="flexCenter paddings innerWidth">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-3/4 h-52 flex justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md">
              <div className="content flex flex-col">
                <h1 className="text-black text-center font-bold text-3xl pb-4">
                  Open Cinkod community in your college
                </h1>
                <p className="text-blue flex justify-start mx-4 font-medium">
                  Meatloaf pastrami short loin, bacon biltong pork loin kevin
                  t-bone doner. Tongue jerky kevin, turducken tail landjaeger
                  rump. Ground round bacon burgdoggen alcatra. Salami strip
                  steak shoulder brisket leberkas. Leberkas cupim sirloin
                  porchetta. Meatloaf beef ribs tail shoulder t-bone corned beef
                  short ribs strip steak shankle cupim sausage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-text text-white flex flex-col mx-96">
          <h1 className="font-bold text-2xl mb-5">ABOUT US</h1>
          <p>
            Bacon ipsum dolor amet tri-tip biltong kielbasa pancetta picanha
            tenderloin. Pork loin corned beef beef ribs salami ham hock bresaola
            pork chop shank brisket cupim buffalo jowl. Ham hock chuck
            prosciutto hamburger cow landjaeger biltong frankfurter. Hamburger
            tongue kevin t-bone kielbasa ground round turkey prosciutto meatball
            andouille brisket.
          </p>
          <br />

          <p>
            Bacon ipsum dolor amet tri-tip biltong kielbasa pancetta picanha
            tenderloin. Pork loin corned beef beef ribs salami ham hock bresaola
            pork chop shank brisket cupim buffalo jowl. Ham hock chuck
            prosciutto hamburger cow landjaeger biltong frankfurter. Hamburger
            tongue kevin t-bone kielbasa ground round turkey prosciutto meatball
            andouille brisket.
          </p>

          <br />
          <p>
            {" "}
            Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
            doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
            round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
            leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
            shoulder t-bone corned beef short ribs strip steak shankle cupim
            sausage.
          </p>
          <br />
          <p>
            {" "}
            Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
            doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
            round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
            leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
            shoulder t-bone corned beef short ribs strip steak shankle cupim
            sausage.
          </p>
        </div>
        <div className="flex justify-center items-center mt-7 text-white">
          <div className="flex flex-row mx-96">
            <div className=" ">
              <img
                src={exampleImage}
                alt="Description of your image"
                className="w-72 h-auto "
              />
            </div>

            <div className="w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-4">
                We are{" "}
                <span className="text-Blue">
                  committed to towards the development
                </span>{" "}
                of you skills and activity.
              </h2>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eget turpis quis lorem sollicitudin blandit. Integer lacinia
                odio sit amet felis lobortis vehicula. Sed ultricies dui in
                felis consectetur
              </p>
            </div>
          </div>
        </div>{" "}
        <p className="text-white w-1/2 text-justify mt-4 mx-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos
          necessitatibus eum facilis ipsa quaerat deleniti, laudantium cum
          voluptatem, perferendis nihil molestias. Dolores facilis corporis
          cupiditate, numquam, blanditiis quidem animi quisquam voluptas illo
          aut voluptatibus voluptate quae tenetur praesentium ut quas mollitia
          eos unde ratione porro, impedit explicabo consequatur beatae.
        </p>
      </div>
      <br />
      <div className="flexCenter paddings innerWidth">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-3/4 h-auto flex justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md p-8">
            <div className="content flex flex-col">
              <h1 className="text-black text-center font-bold text-3xl pb-4">
                Supporte By :
              </h1>
              <div className="flex justify-between">
  <img
    src={exampleImage}
    alt="Supporter 1"
    className="w-24 h-24 rounded-full object-cover mr-20"
  />
  <img
    src={exampleImage}
    alt="Supporter 2"
    className="w-24 h-24 rounded-full object-cover mr-20"
  />
  <img
    src={exampleImage}
    alt="Supporter 3"
    className="w-24 h-24 rounded-full object-cover mr-20"
  />
  <img
    src={exampleImage}
    alt="Supporter 4"
    className="w-24 h-24 rounded-full object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <Footer />
    </section>
  );
};

export default About;
