"use strict";

import React from 'react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import journey1 from '../images/journey_pic.png';
import heroLogo from '../images/fitrquest_logo.png';


// Create the bento box design for landing 
const RevealBento = () => {
  return (
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.08,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
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
    <a href="#"><p className='landing-title'>No Idea, Get Fit Here</p></a>

    <div className='grid grid-flow-col auto-cols-max'>
    <img id="hero-logo" src={heroLogo} />
    <a href="#" className="hero-slogan">Where's your next quest?
    </a>
    </div>
  </Block>
);

const QuestBlock = () => (
  <>
    <Block
      whileHover={{
        scale: 1.03,
      }}
      className="col-span-6 row-span-2 md:col-span-6" id="quest-card"
    >
      <img className="journey-hero" src={journey1} />
      <p className='quest-title'>Take on the quest to fitness!</p>
      <a 
      href="#" 
      className="flex items-center gap-1 text-black-800 hover:underline"> Find your quest
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <>
  <Block 
    whileHover={{
    scale: 1.03,
    }}
  className="col-span-6 text-3x1" id="landing-card">
    <p className='comp-title'>Questcomp</p>
    <p className='comp-text'>Get involved to win various prizes for your journey</p>
    <a 
      href="#" 
      className="flex items-center gap-1 text-black-800 hover:underline"> Click to see more
      </a>
  </Block>
  </>
);

export default RevealBento;