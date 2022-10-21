import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const SkillsCloud = () => {
  const cloud = useRef(null);

  const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Python",
    "Typescript",
    "git",
    "C#",
    "SQL",
    "MySQL",
    "RESTful API",
    "Bootstrap",
    "TailwindCSS",
  ];

  useEffect(() => {
    var tagCloud = TagCloud(cloud.current, myTags, {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    });

    return () => {
      tagCloud.destroy();
    };
  });
  return <span ref={cloud}></span>;
};

export default SkillsCloud;
