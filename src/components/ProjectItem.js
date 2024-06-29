import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
          {technologies.map(function(technology, index){
            return(
              <span key={index}>{technology}</span>
             )
          })}
        
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;