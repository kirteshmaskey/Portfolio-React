import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Project from "./project-array";
import { useState, useEffect } from "react";

const Projects = () => {

  //to fetch details of all the projects present in database
  const [myProject, setMyProject] = useState([]);
  // console.log(myProject);

  const getProjects = async(e)=> {
    const res = await fetch("http://localhost:8000/getProjects",{
      method : "GET",
      headers : {
        "Content-Type" : "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {
      alert("Something went wrong while fetching Projects");
      // console.log("Something went wrong while fetching Projects");
    }else {
      setMyProject(data);
      // console.log("Project details fetched");
    }
  }

  useEffect(()=>{
    getProjects();
  },[])

  return (
    <div className="p-container">
      <div className="main-innerdiv">
        <div className="heading-container">
          <h2>Some of my Projects</h2>
        </div>
        <div className="">
          <div className="row d-flex justify-content-around align-items-center">
          {myProject.map((pr, index) => {
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
