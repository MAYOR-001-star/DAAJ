import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {motion} from 'framer-motion'



const Slide = ({ item }) => {
  const styles = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="inline-block h-full relative w-full" style={styles}>
      <div className="flex flex-column items-center justify-center absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
        <motion.h1 className="text-blue-700 text-xl md:text-5xl bg-white p-4 opacity-75" initial={{x:-250}} animate={{x:0}} transition={{delay:0.5, duration:2}}>
          {item.title}
        </motion.h1>
      </div>
    </div>
  );
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const handlseDotClick = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(-(currentIndex + 1) * 100);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div className="w-full lg:pt-20 overflow-hidden whitespace-nowrap">
      <div
        className="relative h-96 md:h-[34rem] lg:h-[33rem] w-full"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.4s",
        }}
      >
        {slides.map((item) => {
          return <Slide key={item.id} item={item} />;
        })}
      </div>
      <div className="dots_wrapper">
        {slides.map((item, index) => {
          return (
            <span
              key={item.id}
              className={`text-white cursor-pointer text-4xl font-bold ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                handlseDotClick(index);
              }}
            >
              &#8226;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
