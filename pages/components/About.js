import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroimg from "../../assets/hero-img.png"
export default function About() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <Container fluid>
          <Row className="row">
            <Col  className="col-10 mx-auto">
              <Row>
                <Col md="6" className=" pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to About page <br/>
                    <strong className="brand-name"> Parth Patel </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <a className="btn-get-started " href="/contact">
                      Contact Now
                    </a>
                  </div>
                </Col>
                <Col lg="6"  className="col-lg-6 order-1 order-lg-2 header-img">
                  <Image
                    src={heroimg}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
