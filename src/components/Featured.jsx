/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [isHovering, setisHovering] = useState([false, false, false, false]);
  return (
    <div className="w-full py-[3vw] bg-zinc-900">
      <div className="w-full px-[5vw] border-b-2 border-zinc-700 pb-[1vw]">
        <h1 className="text-[4vw]  font-outfit tracking-tight">
          Membership Plans
        </h1>
      </div>
      <div className="px-[5.3vw] ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1 w-1/2 h-[36vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-outfit overflow-hidden text-[#CDEA68]">
              {"FREE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-gradient-to-r from-green-500 to to-green-900  overflow-hidden"
            >
              
              <div className="relative w-400 p-4 overflow-hidden bg-yellow-300 shadow-lg rounded-md shadow-2xl">
                   <div className="w-4/6">
                      <p className="mb-2 text-lg font-medium text-3xl text-zinc-800">
                          Free Membership
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                          Access to Patient's Medical History
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                          Access to Upload Medical Records
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                          24 x 7 Customer Care Support
                      </p>
                      <p className="text-2xl font-medium text-zinc-600 mt-8">
                          $0
                      </p>
                  </div>
              </div>

            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-1/2 h-[36vw] relative"
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-outfit flex text-[#CDEA68] overflow-hidden">
              {"PREMIUM".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card card w-full h-full rounded-lg bg-gradient-to-r from-green-700 to-green-900  overflow-hidden"
            >
              
              <div className="relative w-400 p-4 overflow-hidden bg-yellow-300 shadow-lg rounded-md shadow-2xl">
                   <div className="w-4/6">
                      <p className="mb-2 text-lg font-medium text-3xl text-zinc-800">
                          Premium Membership
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                          Monthly Data Analytics 
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                         Advanced configuration controls
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                        Multi-region , Multi-cloud options 
                      </p>
                      <p className="text-xs text-zinc-700 text-xl">
                          All features of Free Plan
                      </p>
                      <p className="text-2xl font-medium text-zinc-600 mt-5">
                          $29
                      </p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;