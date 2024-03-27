import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("down",0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb:0"
        >
          What client <span className="text-accent">says.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("left",0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
