import React, { useState, useEffect } from "react";
import AnimatedHeader from "./AnimatedHeader";
import ProjectCard from "./ProjectCard";

const query = `{
  projectsCollection {
    items {
      name
      description
      techStack
      githubLink
      clickLink
      projectImageCollection{
        items {
          url
        }
      }
      }
    }
  }`;

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/environments/master`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            query,
          }),
        }
      )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProjects(json.data.projectsCollection.items);
      });
  }, []);

  if (!projects) return null;

  return (
    <div className="p-14">
      <div className="flex mb-5">
        <AnimatedHeader word={"Things"} />
        <span className="w-3" />
        <AnimatedHeader word={"I've"} />
        <span className="w-3" />
        <AnimatedHeader word={"Built"} />
      </div>
      <p className="font-source text-white lg:text-lg md:text-lg sm:text-md text-sm mb-5">
        Learn more by clicking on the Github link!
      </p>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project, index) => {
          const {
            name,
            description,
            techStack,
            githubLink,
            devpostLink,
            projectImageCollection,
            clickLink,
          } = project;

          return (
            <a
              href={clickLink}
              target="_blank"
              rel="noreferrer"
              key={name}
              className="flex"
            >
              <ProjectCard
                name={name}
                description={description}
                techStack={techStack}
                githubLink={githubLink}
                devpostLink={devpostLink}
                imageURL={projectImageCollection.items[0].url}
                index={index}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
