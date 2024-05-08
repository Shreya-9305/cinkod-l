import React from 'react'
import Img1 from "../../assets/home/Img1.png"
import Laptop from "../../assets/home/laptop.png"
import Countdown from './countdown'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


function Home() {
  return (
    <>





<div className='overflow-x-hidden relative bg-[#121212]'     >

<Header/>


<div className="absolute w-80 h-80 top-[7%] left-[40%] rounded-full" style={{ background: 'linear-gradient(to bottom right, var(--color1), var(--color2), var(--color3))', '--color1': 'rgb(241, 236, 33)', '--color2': 'rgb(62, 141, 137)', '--color3': 'rgb(1, 160, 225)', filter: 'blur(7.66rem)'}}></div>



      <div className=" relative flex justify-center items-center h-screen ">
     
      {/*  */}

        <div className="container w-4/5 h-1/2 lg:w-2/3">
          <div className="w-full h-full text-white flex flex-col gap-4 items-center justify-start  ">
            <h1 className='block text-5xl mt-4 '>Empowering Tomorrow’s  </h1>
            <h1 className='block text-5xl '> <span className='text-the-yellow'>Innovators </span>  Today!</h1>

            <p className=' block text-lg text-center mt-6'> You're at the epicentre of student innovation. Welcome to CinKod, where your journey as a developer begins, where possibilities are limitless and the opportunities are endless.
</p>

            <h1 className=' text-the-yellow text-lg'> Have a look at our community</h1>
            <button className="bg-transparent border-2 cursor-pointer border-[rgb(1,160,225)] text-[#01A0E1] hover:bg-blue-500 hover:text-[#fff] py-2 px-4  font-bold"><a href="/events"> View Community</a>
                    
             </button>

             <Countdown/>
          </div>
        </div>
      </div>

{/* ********** NEXT PAGE *************** */}


      <div className=" relative flex justify-center items-center h-full lg:h-screen pb-10 mt-[10rem] " >
        
        
      <div className="relative w-full h-full">
  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#01A0E1] to-[#01A0E1] filter blur-[8rem] top-[25%] left-[20%] lg:left-[30%]" ></div>
  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-teal-500 to-yellow-400 filter blur-[8rem] top-[60%] left-[45%] lg:top-[55%] lg:left-[50%]" ></div>
{/* *********************************************** */}

<h1 className='text-the-blue text-4xl font-light ml-44 mb-20 mt-20'> How we help the students </h1>


{/* ************ CARD FLEXBOX ****************** */}


<div className="parent flex justify-center items-center h-4/5">


 <div class="flex flex-wrap mx-1 justify-center lg:flex-row sm:flex-col md:flex-row w-2/4 h-full">

  {/* ************ CARDS IN PAGE 2 ****************** */}

  <div class="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
    <div class="bg-[#ffffff28] border-2 border-r-blue-300 shadow-sm shadow-blue-400 border-b-blue-400 rounded-lg p-4 h-full">
      <h2 class="text-white text-xl font-bold mb-2">Networking Opportunities: </h2>
      <p class="text-white"> Forge Connection and Shape Your Future. From Industry Leaders to Student Developers, we at Cinkod will provide valuable Networking opportunities to improve your circle and build meaningful connections.
</p>
    </div>
  </div>

  <div class="w-full lg:w-1/2 md:w-2/3 p-4 sm:w-full h-1/2 mb-4 md:mb-0">
    <div class="bg-[#ffffff28] backdrop-blur-2xl border-2 border-l-blue-300  border-b-blue-400  shadow-sm shadow-teal-500  order-b-blue-400 rounded-lg p-4 h-full transform lg:-translate-y-8">
      <h2 class="text-white text-xl font-bold mb-2">Hands-on Projects: </h2>
      <p class="text-white"> Leverage cutting-edge technology and build real-world projects. These projects will help you foster your technical expertise but also develop your problem-solving skills.
</p>
    </div>
  </div>



  <div class="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
    <div class="bg-[#ffffff28] border-2 border-b-teal-500 border-l-teal-500 shadow-sm shadow-teal-500 rounded-lg p-4 h-full ">
      <h2 class="text-white text-xl font-bold mb-2">Workshops: </h2>
      <p class="text-white"> Accelerate your skill development by participating in workshops and training sessions to keep you updated with the new Technologies and get hands-on experience with tools used by Industry Leaders.
</p>
    </div>
  </div>

  <div class="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
    <div class="bg-[#ffffff28] border-2 border-b-teal-500 border-l-teal-500 shadow-sm shadow-teal-500 rounded-lg p-4 h-full transform lg:-translate-y-8">
      <h2 class="text-white text-xl font-bold mb-2">Project Support:  </h2>
      <p class="text-white">Receive guidance for your projects from peers and community members. From Ideas for Hackathon to Execution we will be with you each step to bring your ideas to life.</p>
    </div>
  </div>

</div>


</div>

</div>
        
        
        
         </div>




{/* ******************** NEXT PAGE ******************* */}



<div className=" relative flex justify-center items-center h-full lg:h-full mb-40 pb-10 " >

  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#01A0E1] to-[#01A0E1] filter blur-[8rem] top-[25%] left-[20%] lg:left-[30%]" ></div>
  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-teal-500 to-yellow-400 filter blur-[8rem] top-[60%] left-[45%] lg:top-[55%] lg:left-[50%]" ></div>

  

{/* ********  IMAGES *********** */}



<div className="flex container mx-auto flex-col items-center h-full lg:ml-72 mt-[17rem] mb-28  ">

<div className="flex h-3/4 mb-16">

      <div className="image h-full  ">
         <img src={Img1} alt="img1 h-full" />
      </div>

<p className='block text-white text-lg mr-2 ml-8 text-justify mt-16 w-[55%]'> Bring Cinkod to your college campus and join us in cultivating a vibrant community of tech enthusiasts. By opening the doors to Cinkod at your college, you'll unlock a world of opportunities for skill development, impactful projects and collaboration. Join the movement and let's create a future of innovation together!
</p>


</div>

<div className="flex h-3/4 ">

      

<p className='block text-white w-[55%] text-lg mr-8  ml-2 text-justify mt-16'>At Cinkod, we work hard but party harder. Immerse yourself in a vibrant community culture through our cultural and recreational events, from hackathons to cultural celebrations. We bring teams together through interactive workshops and team-building exercises. Enjoy fun-filled outings that foster a sense of camaraderie among colleagues. We believe in creating a balanced environment that celebrates hard work while encouraging creativity and teamwork.
</p>

<div className="image h-full   ">
         <img src={Laptop} alt="img1 h-full" />
      </div>

</div>


</div>




</div>


{/* ******* FOOTER ******** */}

<Footer/>


    </div>
    
   

    </>
  );
}

export default Home
