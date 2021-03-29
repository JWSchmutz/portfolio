import "./Project.css";

const Project = (props) => {
  console.log(props)
  return (
    <div className="project-container">
      <a href={props.data.url} target="blank">
        <div
          className="project"
          style= {{backgroundImage: `url(${`${require(`../../images/${props.data.image}`).default}`})`}}
        >
          <div className="project-title bg-dark-gray light-gray">
            {props.data.title}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
