import React from "react";
import { Link } from "react-router-dom";
import AnimatedHeader from "../components/AnimatedHeader";
import SkillsCloud from "../components/SkillsCloud";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-center grid md:grid-cols-2 grid-cols-1 bg-my-gray">
        <div className="min-h-screen flex flex-col justify-center items-center mx-16">
          <div>
            <div className="pb-6 flex">
              <AnimatedHeader word={"Who"} />
              <span className="w-3" />
              <AnimatedHeader word={"Am"} />
              <span className="w-3" />
              <AnimatedHeader word={"I"} />
            </div>
            <p className="font-source text-white lg:text-lg sm:text-md">
              My name is Kojo and I am software engineer. I'm always looking for a new challenge to put my engineering skills to use
              <br />
              <br />I am currently learning about blockchain technology and ethical hacking in my free time.
              <br />
              <br />
              Outside of programming, my hobbies include poker, hiking and
              watching sports and bingeworthy Netflix shows. I also enjoy playing Tetris and
              FIFA.
            </p>
            <div className="text-green-400 pt-6 font-source lg:text-lg sm:text-md">
              <Link to="/projects">Check out my projects!</Link>
            </div>
          </div>
        </div>
        <div className="text-white font-bold font-source min-h-screen w-full hidden flex-col justify-center items-center md:flex">
          <SkillsCloud />
        </div>
      </div>
    </>
  );
};

export default About;
