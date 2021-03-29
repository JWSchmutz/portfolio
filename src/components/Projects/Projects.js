import "./Projects.css";
import ProjectRow from "../ProjectRow/ProjectRow";
import data from "../../data/data"

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="page-title light-gray">Projects</h2>
      {data.map(group => <ProjectRow data={group} />)}
    </div>
  );
};

export default Projects;
