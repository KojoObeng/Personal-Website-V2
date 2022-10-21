import Tag from "./Tag";
import { SiDevpost, SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  return (
    <div className="col-span-1 rounded-md flex flex-col bg-[#1b1c1c] shadow-md shadow-[#202121] hover:-translate-y-3 duration-200 cursor-pointer">
      <div className="w-full overflow-hidden rounded-t-md">
        <img className="object-cover" src={props.imageURL} alt={props.index} />
      </div>
      <h2 className="block text-lg text-white font-bold font-roboto p-4">
        {props.name}
      </h2>
      <p className="text-md px-4 pb-2 text-white">{props.description}</p>
      <div className="flex flex-wrap mt-auto text-xs p-4">
        {props.techStack.split(",").map((tech, index) => (
          <span key={index}>
            <Tag word={tech} />
          </span>
        ))}
      </div>
      <div>
        {props.githubLink ? (
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-green-700 bg-green-200 hover:bg-green-300 rounded-full font-roboto ml-4 mb-4">
              <span className="inline-flex mr-2">
                <SiGithub />
              </span>
              Github
            </button>
          </a>
        ) : null}
        {/* {props.devpostLink ? (
          <a href={props.devpostLink} target="_blank" rel="noreferrer">
            <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-green-700 bg-green-200 hover:bg-green-300 rounded-full font-roboto ml-4 mb-4">
              <span className="inline-flex mr-2">
                <SiDevpost />
              </span>
              Devpost
            </button>
          </a>
        ) : null} */}
      </div>
    </div>
  );
};

export default ProjectCard;
