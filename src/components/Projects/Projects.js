import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/comma.png"; 
import editor from "../../Assets/Projects/cc.png";
import chatify from "../../Assets/Projects/my.png"; 
import bitsOfCode from "../../Assets/Projects/myl.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="My.Organics"
              description="Mobile app for MyOrganics. The tech stack is react native node js and wordpress rest api.  My.Organics is an organic, sustainable and cruelty free haircare and styling brand. The range of exclusive products is made from certified ingredients that are grown using organic and bio-dynamic farming techniques."
              link="https://apps.apple.com/be/app/my-organics/id1552454809"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Comma - Find Barbers"
              description="Mobile app for Comma - Find Barbers. The tech stack is react native and mern stack. Comma Find barbers is a mobile platform for customers to find the barbershops and independent barbers near you and manage bookings online.
              Comma Find Barbers booking app is a mobile platform for barbers and clients to enhance Customer experience.
               Explore and book best barbers near you."
              link="https://apps.apple.com/tt/app/comma-find-barbers/id1601995010"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Comma Barbers Booking App"
              description="Comma barbers booking app is a mobile platform for barbers and customers to manage bookings online. It also connects barbershops and independent barbers to work together.  Comma barbers booking app is a mobile platform for barbers and clients to enhance barbershop experience.     An all-in-one platform to power your barbershop operations.   Take more control of operations, increase revenue, and delight your    customers with a single, easy-to-use platform."
              link="https://apps.apple.com/tt/app/comma-barbers-booking-app/id1601934663"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Nine Link - Bio in one Link "
              description="Mobile app for Nine Link - Bio in one Link. The tech stack is react native, react-native-web and mern stack. Build and manage your website, shop, restaurant, gym, clinic or online store from anywhere like a link tree. Tell your unique story and build your brand with nine link.  Generate eye-catching smart links and landing pages to fans.   Share all links at once in a beautiful way and track its performance.  No desktop, design or website building skills are required."
              link="https://apps.apple.com/tt/app/nine-link-bio-in-one-link/id1607693450"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
