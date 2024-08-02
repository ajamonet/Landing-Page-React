import React, { act } from "react";
import Smartwatch from "../../assets/smartwatch.png";
import Minispeaker from "../../assets/minispeaker.png";
import Airbuds from "../../assets/airbuds.png";
import Airpods from "../../assets/airpods.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const gadgetData = [
  {
    id: 1,
    image: Smartwatch,
    title: "Explore the Latest Tech Gadgets",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Retro Watch",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Minispeaker,
    title: "Mini Speaker",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Mini Speaker",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Airpods,
    title: "Wireless Airpods",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Airbuds",
    bgColor: "#5d818c",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(gadgetData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[767px]">
          {/* ______ Tech Gear Info ______ */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: activeData.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* ______ Tech Gear List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !mt-24"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Tech Gear For You</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* Tech Gear list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {gadgetData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer"
                      >
                        <div>
                          <img src={item.image} alt="" className="w-[200px] pr-[8%] " />
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-bold pl-[8%]">{item.price}</p>
                          <p className="text-xs font-normal text-nowrap pl-[8%]">
                            {item.modal}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className="flex flex-col justify-end items-center pb-[45%]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,

                  transition: {
                    duration: 0.2,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>
          {/* ______ WhatsApp Icon ______ */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
