// react icons
import {} from "react-icons/rx";

// service data
export const serviceData = [];

//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex items-center flex-col xl:flex-row gap-x-8">
          {/* text */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
          >
            <motion.h2 variants={fadeIn("up", 0.3)} className="h2 xl:mt-8">
              My Works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
              non.
            </motion.p>
          </motion.div>
          {/* slider */}
          <motion.div variants={fadeIn("down",0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] z-10">
          <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

