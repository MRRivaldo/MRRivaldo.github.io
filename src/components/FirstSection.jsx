import React from "react";
import Container from "react-bootstrap/Container";
import "./FirstSection.css";

function FirstSection() {
  return (
    <Container>
      <section className="first-section">
        <div className="container-section">
          <h1 className="title">Frontend Developer & Student</h1>
          <h2 className="subtitle">Hate & Love Relationship With Code</h2>
          <img className="avatar" src="/images/avataaars.svg" />
        </div>
      </section>
    </Container>
  );
}

export default FirstSection;
