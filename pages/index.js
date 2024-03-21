//next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div>
      <div className="bg-primary/60 h-full">{/* text */}</div>
      <div className="w-full h-screen bg-gradient-to-r from-primary/10 via-black/10 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 className="h1 text-5xl" variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden">
            Transforming Ideas <br /> Into {""}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden">
            protocol Future FreshQuod doloremque quia ut ratione sint. Unde
            tempore blanditiis corporis totam molestias asperiores quia quas. Et
            alias asperiores. Sed necessitatibus autem nemo voluptatibus
            dignissimos velit aliquid voluptate.
          </motion.p>
          {/* btn */}
          <motion.div className="flex" variants={fadeIn('up',0.3)} initial="hidden" animate="show" exit="hidden">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
