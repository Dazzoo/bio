import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

import react01 from "../../assets/react.png";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              {/* Here are my skills. */}
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
              <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={90}
                />
                 <ProgressBar logo={<FaReact />} name={"React Js"} value={90} />
                 <ProgressBar 
                 logo={<img src={require('../../assets/nextjs.png')} alt="" className="w-[18.4px]" />} 
                 name={"Next JS"} value={80} />

                 
                <ProgressBar
                 logo={<img src={require('../../assets/nodejs_black.png')} alt="" className="w-[19.4px]" />} 
                  name={"Node JS"}
                  value={85}
                />
                <ProgressBar 
                logo={<img src={require('../../assets/Expressjs.png')} alt="" className="w-[18.4px]" />} 
                name={"Express"} 
                value={73} />
                <ProgressBar 
                logo={<img src={require('../../assets/mongodb_black.png')} alt="" className="w-[18.4px]" />}  
                name={"MongoDB"} 
                value={80} />
                
               
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
         
            <div className="first2 flex flex-col gap-10">
            <p>Front-end</p>
              <SkillBox
                logo={ <img src="https://img.icons8.com/color/48/null/javascript--v1.png"></img>}
                black={"white"}
                white={"black"}
                skill={"Java Script"}
              />
              <SkillBox
                logo={ <img src={require('../../assets/react.png')}></img>}
                black={"white"}
                white={"black"}
                skill={"React Js"}
              />
                <SkillBox
                logo={ <img src={require('../../assets/nextjs.png')}></img>}
                black={"white"}
                white={"black"}
                skill={"Next Js"}
              />
            </div>
            
            <div className="last2 flex flex-col gap-10">
              <p>Back-End</p>
              <SkillBox
                logo={ <img src={require('../../assets/nodejs_black.png')} ></img>}
                black={"black"}
                white={"white"}
                skill={"Node Js"}
              />
              <SkillBox
                className=""
                  logo={ <img src={require('../../assets/Expressjs.png')}></img>}
                black={"black"}
                white={"white"}
                skill={"Express Js API"}
              />
              <SkillBox
                className=""
                logo={ <img src={require('../../assets/mongodb.png')}></img>}
                black={"black"}
                white={"white"}
                skill={"MongoDB"}
              />
            </div>
            
          </div>
        </div>

        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          // className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
        
            <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src={require('../../assets/HTML_logo.png')}
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src={require('../../assets/CSS_logo.png')}
            />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img className="w-[40px] h-[30px] md:w-[35px] md:h-[30px]" src={require('../../assets/Tailwind_CSS_Logo.png')} />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
              <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src={require('../../assets/aws.jpg')}/>
          <img className="w-[55px] h-[32px] md:w-[35px] md:h-[30px]" src={require('../../assets/docker_logo.png')}/>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
