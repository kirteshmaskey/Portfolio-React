import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Projects = () => {

  //to fetch details of all the projects present in database
  const [myProject, setMyProject] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  // console.log(myProject);

  const getProjects = async(e)=> {
    const res = await fetch("https://portfoliobackend-371f.onrender.com/getProjects",{
      method : "GET",
      headers : {
        "Content-Type" : "application/json"
      }
    });

    const data = await res.json();
    // console.log(data);

    if(res.status === 422 || !data) {
      alert("Something went wrong while fetching Projects");
      // console.log("Something went wrong while fetching Projects");
    }else {
      setMyProject(data);
      setIsFetched(true);
      // console.log("Project details fetched");
    }
  }

  useEffect(()=>{
    getProjects();
  },[])

  return (
    <div className="p-container py-5 mb-4">
        <div className="heading-container">
          <h2>Some of my Projects</h2>
        </div>
        {
          isFetched ?
            <div className="project-container">
              <div className="row project-grid">
              {myProject.map((pr, index) => {
                return (
                  <>
                    <Card style={{ width: "20rem"}} className="card-container">
                      <Card.Img variant="top" height="200px" width="30%" src={pr.imgSrc} style={{objectFit:"cover"}}/>
                      <Card.Body>
                        <Card.Title>{pr.title}</Card.Title>
                        <Card.Text>
                          {pr.desc}
                        </Card.Text>
                        <div className="btn-container">
                          <a href={pr.link} target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                            <Button variant="primary" className="project-btn">View Project</Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
              </div>
            </div>
          :
          <div className="loader-container">
            <Box sx={{ display: 'flex', justifyContent: "center", height: "100vh" }}>
                Loading... &nbsp;
                <CircularProgress />
            </Box>
          </div>
        }
    </div>
  );
};

export default Projects;
