import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";
import englishBrain from "../../Assets/Certificates/build_your_english_brain.jpg";
import communicationFundamentals from "../../Assets/Certificates/commumication_fundamentals.jpg";
import docker from "../../Assets/Certificates/docker.jpg";
import dockerEssential from "../../Assets/Certificates/docker_essential.jpg";
import gitGithub from "../../Assets/Certificates/git_github_bootcamp.jpg";
import goComplete from "../../Assets/Certificates/go_complete_dev_guide.jpg";
import ibmCloudEssentials from "../../Assets/Certificates/ibm_cloud_essentials.jpg";
import ibmCloudTechnicalConcepts from "../../Assets/Certificates/ibm_cloud_technical_adv_concepts.jpg";
import ibmCloudTechnicalFoundations from "../../Assets/Certificates/ibm_cloud_technical_adv_foundations.jpg";
import ibmWatsonX from "../../Assets/Certificates/ibm_watsonx_ai.jpg";
import introGenAI from "../../Assets/Certificates/intro_gen_ai.jpg";
import introToCloud from "../../Assets/Certificates/introduction_to_cloud.jpg";
import k8s from "../../Assets/Certificates/k8s.jpg";
import pythonFlask from "../../Assets/Certificates/python_and_flask_bootcamp.jpg";
import solidPrinciples from "../../Assets/Certificates/solid_principle.jpg";

const certificates = [

  { title: "Docker for the Absolute Beginner - Hands On", img: docker, link: "https://drive.google.com/file/d/1Y5cK0z6oiG8uuR8aLrtLvd05ErsZbg1U/view?usp=sharing" },
  { title: "Docker Essentials: A Developer Introduction", img: dockerEssential, link: "https://drive.google.com/file/d/1Olp8E0Q1ZJh-DoGBGl6W6kiU77UxfOaO/view?usp=sharing" },
  { title: "The Git & GitHub Bootcamp", img: gitGithub, link: "https://drive.google.com/file/d/1x9uRecjTiYumohxSDGG8PiVrKNM4he1Z/view?usp=sharing" },
  { title: "Go: The Complete Developer's Guide (Golang)", img: goComplete, link: "https://drive.google.com/file/d/18DgxJ5l8NdORFqIuzL-cI-lRAAvTiPoP/view?usp=sharing" },
  { title: "IBM Cloud Essentials V3", img: ibmCloudEssentials, link: "https://drive.google.com/file/d/1Tx_78daJq5-f9gISNKhClF3qk_NLNvDW/view?usp=sharing" },
  { title: "IBM Cloud Technical Advocate Concepts", img: ibmCloudTechnicalConcepts, link: "https://drive.google.com/file/d/1KJfvTcGErzDM57MUCYNJPUHZfma-sVWl/view?usp=sharing" },
  { title: "IBM Cloud Technical Advocate Foundations", img: ibmCloudTechnicalFoundations, link: "https://drive.google.com/file/d/1VMV-S--Ib4lTqxiciRwim3UeIJEk8P19/view?usp=sharing" },
  { title: "IBM WatsonX.ai Technical Essentials", img: ibmWatsonX, link: "https://drive.google.com/file/d/1iH8ZtFI1S8ixp7rODit51MyUebFiChA7/view?usp=sharing" },
  { title: "Intro to ChatGPT and Generative AI", img: introGenAI, link: "https://drive.google.com/file/d/1smuTLXjqCqbJr8mn5JC4HKolKQcpK95_/view?usp=sharing" },
  { title: "Introduction to Cloud", img: introToCloud, link: "https://drive.google.com/file/d/1H8_Un4DjHYf9UXNI2Pm31lJ0BVt3UC-b/view?usp=sharing" },
  { title: "Kubernetes for the Absolute Beginners - Hands On", img: k8s, link: "https://drive.google.com/file/d/1w1lDZtFjRuY2orrwhAPDYWPMO0IJbwJ8/view?usp=sharing" },
  { title: "Python and Flask Bootcamp: Create Websites using Flask!", img: pythonFlask, link: "https://drive.google.com/file/d/1te4sJmba2AxHCmC0wR29DkAQqSWRY1UI/view?usp=sharing" },
  { title: "SOLID Principles: Introducing Software Architecture & Design", img: solidPrinciples, link: "https://drive.google.com/file/d/1muxBDvgpfVnm5m0IlKv8YpO7-F7eSv9I/view?usp=sharing" },
  { title: "Building Your English Brain", img: englishBrain, link: "https://drive.google.com/file/d/1g56Jtww_34sn_DzkOBJUYMPP7S2EJhr1/view?usp=sharing" },
  { title: "Communication Fundamentals", img: communicationFundamentals, link: "https://drive.google.com/file/d/1Dfmhc_pD0vzhVosuVoewYNQ8-sXxLDwm/view?usp=sharing" },
];

const Certificates = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few certificates I've earned.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((certificate, index) => (
            <Col key={index} md={6} className="project-card">
              <CertificateCard img={certificate.img} title={certificate.title} link={certificate.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Certificates;
