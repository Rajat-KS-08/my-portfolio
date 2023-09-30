import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  
  const buttonClasses = active ? ("text-[#faad14] border-b border-blue-500") : ("text-[#a0d911]");

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#5cdbd3] ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 bg-[#ffd666]-500 mt-2 mr-3'
      ></motion.div>
    </button>
  );
}

export default TabButton;
