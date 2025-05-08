import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="vh-100 d-flex flex-column gap-2 align-items-center justify-content-center">
      <h1>Not found</h1>

      <div className="unitbtnss">
        <Link to="/">Go Back</Link>
      </div>
    </Container>
  );
};

export default NotFound;
