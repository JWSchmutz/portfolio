import "./ProjectRow.css";
import Project from "../Project/Project";
import React, { useEffect, useState } from "react";

const ProjectRow = (props) => {
  const rowRef = React.createRef();
  const [resizeState, setResizeState] = useState(0);
  const [scrollArrows, setScrollArrows] = useState(false);
  const [left, setLeft] = useState(0);
  const [rowWidth, setRowWidth] = useState(null);
  let numberOfChildren;
  const setVariables = () => {
    if (rowRef.current.offsetWidth < rowRef.current.scrollWidth) {
      setScrollArrows(true);
      setRowWidth(rowRef.current.offsetWidth);
    }
    numberOfChildren = rowRef;
  };

  useEffect(() => {
    setVariables();
    console.log(resizeState);
  }, []);

  const goLeft = () => {
    const projectWidth =
      rowWidth / rowRef.current.childNodes[2].childNodes.length;
    console.log(
      rowRef.current.childNodes[2].firstChild.getBoundingClientRect().x
    );
    if (rowRef.current.childNodes[2].firstChild.getBoundingClientRect().x < 0)
      setLeft(left + projectWidth);
  };
  const goRight = () => {
    const projectWidth =
      rowWidth / rowRef.current.childNodes[2].childNodes.length;
    if (
      rowRef.current.childNodes[2].lastChild.getBoundingClientRect().x +
        projectWidth >
      rowWidth
    )
      return setLeft(
        left - rowWidth / rowRef.current.childNodes[2].childNodes.length
      );
  };

  return (
    <div className="project-row" ref={rowRef}>
      <h3 className="project-row-title light-gray bg-dark-gray">
        {props.data.groupName}
      </h3>
      <hr className="gray-bar" />
      <div className="slider" style={{ left: `${left}px` }}>
        {props.data.projects.map((project) => (
          <Project data={project} />
        ))}
      </div>
      {scrollArrows ? (
        <div className="arrow arrow-left" onClick={goLeft}>
          &#60;
        </div>
      ) : (
        ""
      )}
      {scrollArrows ? (
        <div class="arrow arrow-right" onClick={goRight}>
          &#62;
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectRow;
