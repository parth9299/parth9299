import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import landingIMG from "../../assets/image.svg";
export default function LandingPage() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <Container fluid>
          <Row>
            <Col className="col-10 mx-auto">
              <Row>
                <Col className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your business with
                    <strong className="brand-name"> Parth Patel </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <Link className="btn-get-started" href="/service">
                      Get Started
                    </Link>
                  </div>
                </Col>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <Image
                    src={landingIMG}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
