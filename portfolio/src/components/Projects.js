import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Project from "./project-array";

const Projects = () => {
  return (
    <div className="p-container">
      <div className="main-innerdiv">
        <div className="heading-container">
          <h2>Some of my Projects</h2>
        </div>
        <div className="">
          <div className="row d-flex justify-content-around align-items-center">
          {Project.map((pr, index) => {
            return (
              <>
                <Card style={{ width: "20rem"}} className="card-container">
                  <Card.Img variant="top" src={pr.imgSrc} />
                  <Card.Body>
                    <Card.Title>{pr.title}</Card.Title>
                    <Card.Text>
                      {pr.desc}
                    </Card.Text>
                    <div className="btn-container">
                      <Button variant="primary" className="project-btn">
                        <a href={pr.link} target="_blank" className="text-decoration-none text-light">View Project</a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
