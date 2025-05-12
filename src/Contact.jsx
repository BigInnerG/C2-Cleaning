import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        style={{
          width: "40rem",
          borderRadius: "20px",
          background: "linear-gradient(to bottom right, #fdfbfb,rgb(34, 170, 238))",
        }}
        className="shadow-lg card-hover"
      >
        <Card.Img
          variant="top"
          src="images/cleaningbask.jpg"
          alt="profile photo"
          className="rounded-circle p-3 mx-auto"
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold fs-4 text-primary">
            C2 CLEANING SOLUTIONS
          </Card.Title>
          <Card.Text className="text-muted">
            Professional Cleaning Services for Your Home and Business
            <br /><br />
            <p>Email: cbrowncleaningsolutions@gmail.com</p>
            <p>Phone: 770-298-9286</p>
            <p>Location: Fayetteville, GA</p>

          </Card.Text>

          {/* View Photos Button that links to /photos */}
          <Link to="/photos">
            <Button variant="outline-primary" size="lg" className="px-4 py-2 mt-2 custom-btn">
              View Photos
            </Button>
          </Link>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <Link to="https://linkedin.com" target="_blank" rel="noreferrer" className="text-decoration-none text-primary fs-4">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com" target="_blank" rel="noreferrer" className="text-decoration-none text-dark fs-4">
              <FaGithub />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noreferrer" className="text-decoration-none text-info fs-4">
              <FaTwitter />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
