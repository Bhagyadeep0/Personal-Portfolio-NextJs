//next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { easeInOut, motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div>
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-screen bg-gradient-to-r from-primary/10 via-black/10 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              className="h1 text-5xl"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Transforming Ideas <br /> Into {""}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              protocol Future FreshBerkshire Generic BerkshireComputer utilize.
            </motion.p>
            {/* btn */}
            <motion.div
              className="flex"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* background image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right md:bg-no-repeat w-full h-full mix-blend-color-dodge opacity-100 absolute z-0"></div>
        {/* particles */}
        <div>
          {/* <ParticlesContainer /> */}
        </div>
      </div>

      {/* avatar.png */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 0.3, ease: easeInOut }}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 xl:bottom-0 xl:right-[8%]"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
