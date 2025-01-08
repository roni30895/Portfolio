import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import mediQuickCare from "../../Assets/Projects/MediQuick_Care.png";
import tumorDetector from "../../Assets/Projects/tumor_detector.jpg";

const projects = [
    {
        title: "Tumor Detector",
        description: "A healthcare project leveraging AI for detecting tumors using advanced image processing and machine learning techniques.",
        img: tumorDetector,
        link: "#",
    },
    {
    title: "MediQuick Care - Medical Booking Website",
    description: "A responsive medical booking website with an admin dashboard to manage appointments, working hours, and active payments.",
    img: mediQuickCare,
    link: "#",
  },
  
];

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard img={project.img} title={project.title} description={project.description} link={project.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
