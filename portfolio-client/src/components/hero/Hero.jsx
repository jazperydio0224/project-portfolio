import Spline from "@splinetool/react-spline";
import Navbar from "../etc/Navbar";

const Hero = () => {
  return (
    <section className="section relative">
      <Navbar />
      <Spline scene="https://prod.spline.design/qayC9tyamImEVXGn/scene.splinecode" />
      <div className="absolute top-[12rem] left-[138px]">
        <h1 className="text-[#C8FAFA] font-bold text-[80px] leading-[1.2] mt-10">
          Welcome to <br /> my portfolio
        </h1>
        <h2 className="text-[#C8FAFA] text-[60px]">Jazper Ydio</h2>
        <h3 className="text-[#C8FAFA] text-[50px]">Software Engineer</h3>
        <button className="btn w-[240px] h-[53px] text-[25px] mt-5">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
