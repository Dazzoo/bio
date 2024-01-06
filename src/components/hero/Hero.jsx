import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Yurii_Shushanskyi_Full-Stack.pdf";
import { IoLogoWhatsapp } from "react-icons/io";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import "./hero.css"


const Hero = () => {
  const [copied, setCopied] = React.useState(false);

  const onCopyEmail = React.useCallback(() => {
    setCopied(true);
      setTimeout(() => { 
        setCopied(false)
       }, 1000)
  }, [])

  return (
    // <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div id="home">
      <div className=" container mx-auto pt-5 h-[860px] md:h-[100vh] md:flex-col-reverse pb-[80px] sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Yurii
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node JS Developer",
                2000,
                "Web Developer",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            {/* <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Lorem ipsum dolor sit amet consectetur
            </p> */}
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/yurii-shushanskyi-399916160"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span> 
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                 <a href="https://github.com/Dazzoo">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a> 
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yurii-shushanskyi-399916160">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <CopyToClipboard onCopy={onCopyEmail} text={"yuraks46@gmail.com"} className='' >
                <div className="cursor-pointer " >
                  {copied ? 
                  <div className=" font-[2.5rem] w-[100px] h-[30px] pt-[5px]" >Email copied</div> :
                    <li>
                      {" "}
                      <AiOutlineMail  className=" h-[1.92rem] w-[1.92rem] text-xl hover:scale-125 cursor-pointer" />{" "}
                  </li>}
                 </div>
              </CopyToClipboard>
              {/* <li>
                <a href="https://instagram.com/pirate_karthik046?igshid=MzRlODBiNWFlZA==">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
              {/* <li>
                <a href="https://www.facebook.com/profile.php?id=100008177468331">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
              {/* <li>
                <a href="https://twitter.com/NsKarth046?t=O2GdrzAKvgF80qciGm7Xhg&s=09">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
              {/* <li>
                <a href="https://twitter.com/NsKarth046?t=O2GdrzAKvgF80qciGm7Xhg&s=09">
                  {" "}
                  <FaTelegramPlane className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
              {/* <li>
                <a href="https://wa.me/919025516538">
                  {" "}
                  <IoLogoWhatsapp className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[85%] hero-pic w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={require('../../assets/image.jpg')}
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-14 md:bottom-3 right-8 md:right-2">
            <a href="https://wa.me/919025516538">
                <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                  <img
                    className=" w-[135px] md:w-[90px] circle-text"
                    src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                    alt=""
                  />
                  <FaPlay
                    className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
