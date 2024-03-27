// components
import Circles from "../../components/Circles";

//import icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";


//variants
import {fadeIn} from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className=" flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2  variants={fadeIn("up")}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12">
            Let's Work <span className="text-accent">Together.</span>
          </motion.h2>
          {/* form */}
          <motion.form  variants={fadeIn("up")}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" relative flex-1 flex flex-col justify-center gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-6 w-full mx-auto">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="input"
              
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required title="please enter valid email id"
              />
            </div>
            <input type="text" placeholder="subject" className="input" required/>
            <textarea
              placeholder="your message..."
              className="textarea"
            ></textarea>
            <button className=" relative btn rounded-full border border-white/50 max-w-[170px] px-8 py-0  transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="absolute group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300 text-lg">
                Let's Talk
              </span>
              <BsArrowRight className="translate-y-[120px] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
