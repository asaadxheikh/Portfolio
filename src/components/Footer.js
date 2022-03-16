import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Forked from Soumyajit and Redesign by Asaad Sheikh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SH</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/asaadxheikh"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/asaad-sheikh-0b3b10135/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
