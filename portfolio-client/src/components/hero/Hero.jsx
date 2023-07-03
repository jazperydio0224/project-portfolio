import Spline from "@splinetool/react-spline";
import Navbar from "../etc/Navbar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, staggerChildren: 1 }}
      className="hero-section relative"
    >
      <motion.div
        initial={{ opacity: 0, translateY: -1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: -1000 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 3, delay: 1 }}
      >
        {/* <Spline scene="https://prod.spline.design/qayC9tyamImEVXGn/scene.splinecode" /> */}
        <div className="w-full h-[100vh]"></div>
      </motion.div>

      <div className="absolute top-[13rem] left-[138px]">
        <motion.h1
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="text-[#C8FAFA] font-bold text-[80px] leading-[1.2] mt-10"
        >
          Hey, I'm Jazper
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 3, delay: 2 }}
          className="text-[#C8FAFA] text-[60px]"
        >
          I'm a <span className="highlight">Software Engineer</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 3, delay: 3 }}
          className="btn w-[240px] h-[53px] text-[25px] mt-5"
        >
          <a href="#Projects">
            {" "}
            Explore
            <DoubleArrowIcon />
          </a>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
