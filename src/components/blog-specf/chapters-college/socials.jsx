import React from 'react'
import fb from "../../assets/chapters college/fb.png"
import X from "../../assets/chapters college/x.png"
import link from "../../assets/chapters college/link.png"
import Ig from "../../assets/chapters college/Ig.png"

function socials() {
  return (
    <div>
      <div className="icons flex justify-end  h-10 w-full mt-8">

<div className="img1 mr-2 bg-slate-600 rounded-full flex items-center justify-center h-10 w-10 ">
  <img src={fb} alt="" />
</div>

<div className="img1 mr-2 bg-slate-600  rounded-full flex items-center justify-center h-10 w-10 ">
  <img src={X} alt="" />
</div>

<div className="img1 mr-2 bg-slate-600  rounded-full flex items-center justify-center h-10 w-10 ">
  <img src={link} alt="" />
</div>

<div className="img1 mr-2 text-white bg-slate-600  rounded-full flex items-center justify-center h-10 w-10 ">
  <img src={Ig} alt="" />
</div>



</div>

    </div>
  )
}

export default socials
