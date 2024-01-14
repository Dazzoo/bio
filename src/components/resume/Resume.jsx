import React, { useState, useEffect } from "react";





const About = () => {
  const [viewmore, setviewmore] = useState(false);

  
  return (
    <div id="About" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black sm:text-2xl">
          About
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          {/* Here are my experiences and qualifications. */}
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-10 flex md:flex-col sm:gap-5 mx-auto">
        <div className="left flex-1 flex items-start justify-center relative">
          <div className="absolute top-[0px] w-[100%]" >
            <legend className=" w-min bg-white w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-300 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
          </div>
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Full-stack
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Freelance, Remotely
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                As a new freelancer, I have been working on a variety of projects, including 
                web development, fixing bugs, writing documentations. I am responsible for the entire development process, 
                from the initial design to the final deployment of the project. My primary focus is on 
                creating user-friendly and responsive web applications that meet the client's needs and 
                specifications. I have been working with a variety of technologies, including but not 
                limited to React JS, Redux JS, Next.js, Node.js, MongoDB and Express.
                </p>
              </div>
              
            </div>
{/* //new  */}<div>&nbsp;</div>
            <div className=" relative gap-1.5	">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]  ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Full-stack
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                BIXME LLC, Florida, USA ( Remotely )
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Mar 2021 - Oct 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                In the Delikeys project, I served as the sole front-end developer while also participating 
                significantly in collaboration with the back-end team. I was responsible for creating 
                and developing an application from scratch, which upon completion, would be ready for 
                live production use. The main goal of the application was to facilitate and automate the 
                processes of parcel shipping and tracking, and thus enhance productivity in warehouse operations.
                
                To implement the solution, I applied various technologies, including but not limited 
                to React JS, Redux JS, and Tailwind CSS. In addition to development tasks, I worked 
                closely with the back-end team to ensure a successful API connection, guaranteeing
                 that the implementation and desired functionality of the application.
                
                A key achievement in this project was that the implementation of the application led to 
                an 8-fold increase in the number of parcels managed per worker. This notable improvement 
                in efficiency was achieved without any deleterious effect on the employed workforce number,
                 demonstrating the effectiveness and utility of the developed application in real-world 
                 operations.

                 Furthermore, I was involved in another aspect of the project, working on an Admin panel 
                 application built with Next.js on the front-end and Node.js, Express, and MongoDB on 
                 the back-end. This provided a cohesive user interface for administrative purposes and 
                 system management.
                </p>
              </div>
              
            </div>
          {/* <button onClick={()=>{

setviewmore(true)

          }}>Viwe more</button> */}

              <div>
            <div>&nbsp;</div>
            <div className=" relative gap-1.5	">
             
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]  ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
            
              <div className=" flex flex-col bg-white gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Front-end
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                StarApps, Lviv, Ukraine
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Aug 2020 - Mar 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                At this company, I had the opportunity to create top-tier websites. 
                My role as a front-end developer encompassed frequent collaboration on various projects, 
                ranging from small scale to extensive, complex projects. These experiences primarily 
                revolved around providing the most efficacious solutions for clients, which not only 
                brought their innovative ideas to life but also considerably amplified their profits. 
                In the course of this, I had my skills honed in React JS, evolving immensely as a developer.
                </p>
              </div>
              
            </div>


              </div>
              : 
              <div>
              
             </div>
              
              

        
          
            
          </fieldset>
          
        </div>
        






        <div className="right mb-500px flex-1 flex  justify-center relative">
        <div className="absolute top-[0px] left-[0px] w-[100%]" >
              < legend className=" w-min bg-white ml-[50%] translate-x-[-50%] border-2 border-gray-300 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                Education
              </legend>
              </div>
          <fieldset
            data-aos="zoom-in"
            className="  w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            {/* <legend className=" bb w-auto ml-[50%] bg-white translate-x-[-50%] border-2 border-gray-300 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend> */}
              <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                The Complete Bootcamp
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Udemy, Online
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Mastered the modern back-end stack including Node, Express, MongoDB and Mongoose, and applied knowledge to build
                    a practical, dynamic application from scratch. Skilled in constructing a robust RESTful API and performing CRUD
                    operations with MongoDB. Gained insights on working with data in NoSQL databases, implemented advanced
                    authentication and security measures, and acquired hands-on experience in server-side website rendering with Next.js .
                    Further developed proficiency in Stripe credit card payments, handling email interactions, file uploads, and deploying
                    applications to production.
                </p>
              </div>
            </div>
            <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Next.js - The Complete Guide
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Udemy, Online
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                    Learned how to make Web apps on the back end side by extending the latest React feature.
                    In addition I also learned how to use Tailwind CSS. Incorporating 
                    Tailwind not only enriched the visual aesthetics of the projects but also optimized their design workflow
                </p>
              </div>
            </div>
            <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                React JS Way of Samurai
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Online classes
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                The course provided me an excellent opportunity to apply theoretical concepts in real-world scenarios, 
                learning to build responsive and interactive websites. Spanning from fundamental to advanced applications, 
                the curriculum reinforced my proficiency in JavaScript while introducing me to the 
                powerful libraries of React/Redux. During these courser I developed my first modern web project social-network that
                you can find on my Github.
                </p>
              </div>
            </div>
{/* new */}
            <div>&nbsp;</div>
            <div className=" relative ">
              {/* design */}
              <div className="design flex  absolute left-[-75px] top-1/2 items-center rotate-[90deg] sm:left-[-75px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[80px] bg-gray-300 h-[2px] sm:w-[80px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                {/* <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Sc, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Yadava  College 
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2016 - Year 2019
                </span> */}
                <p className=" text-[.9rem] text-justify text-gray-500">
                As a graduate student, I have developed a diverse and valuable skill set. 
                I possess proficiency in various web development technologies, including HTML, CSS, 
                JavaScript which enables me to excel on the front-end of web development. 
                </p>
              </div>
            </div>
            <div>&nbsp;</div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col bg-white gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Sc, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Lviv Polytechnic National University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2016 - Year 2020
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Gained a firm grounding in theoretical and applied computer science, 
                  a focus on key areas including Algorithms, Networks, Databases, Software Development, 
                  Web Programming. Participated in advanced projects, promoting practical 
                  skills alongside research-centric education.
                </p>
              </div>
            </div>
          </fieldset>
        </div>


        
      </div>
    </div>
  );
};

export default About;
