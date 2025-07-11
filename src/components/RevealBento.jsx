"use strict";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import heroLogo from '../images/fitrquest_logo.svg';


// Create the bento box design for landing 
const RevealBento = () => {
  return (
  <motion.div 
  initial="initial"
  animate="animate"
  transition={{ staggerChildren: 0.08,}}
  className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
    <HeaderBlock />
    <QuestBlock />
    <AboutBlock />
  </motion.div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block 
  whileHover={{
    scale: 1.03,
  }}
  className="col-span-12 row-span-1 md:col-span-6" id="landing-card">
    <div className='grid grid-flow-col auto-cols-max' id="hero-logo-wrapper">
    <img id="hero-logo" src={heroLogo} alt="FitrQuest" />
    </div>
  </Block>
);

const QuestBlock = () => (
  <a href="/questpath" className="col-span-6 row-span-2 md:col-span-6">
    <Block
      whileHover={{ scale: 1.03 }}
      id="quest-card"
      className="relative h-full w-full overflow-hidden">

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 p-4 text-white">
        <h1 className="block-heading text-xl font-bold">Take on the quest to fitness!</h1>
        <p className="comp-text">Find your quest</p>
      </div>
    </Block>
  </a>
);


const AboutBlock = () => (
  <a href="/Comp" className="col-span-6">
    <Block 
      whileHover={{ scale: 1.03 }}
      className="relative w-full h-full text-3xl cursor-pointer overflow-hidden"
      id="comp-card">

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 p-4 text-white">
        <h1 className="block-heading text-xl font-bold">Questcomp</h1>
        <p className="comp-text">Get involved to win various prizes for your journey</p>
      </div>
    </Block>
  </a>
);



export default RevealBento;