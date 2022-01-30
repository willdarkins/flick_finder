import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return <>
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .2
        }
      },
    }}>

      <h1>Is this working?</h1>
    </motion.div>

  </>;
};

export default About;
