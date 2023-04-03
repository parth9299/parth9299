import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import landingIMG from "../../assets/image.svg";
export default function LandingPage() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <Container fluid>
          <Row className="row">
            <Col className="col-10 mx-auto">
              <Row>
                <Col
                  md="6"
                  className=" pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                >
                  <h1 className="d-inline-block">
                    <span>H</span>
                    <span>i</span>
                    <span>,</span>
                    <br />
                    <span>I</span>
                    <span>'</span>
                    <span>M</span>
                    <br />
                    <h1 className="brand-name">
                      <span>P</span>
                      <span>a</span>
                      <span>r</span>
                      <span>t</span>
                      <span>h</span>
                      <span>&nbsp;</span>
                      <span>P</span>
                      <span>a</span>
                      <span>t</span>
                      <span>e</span>
                      <span>l</span>
                    </h1>
                  </h1>
                  <h2 className="mb-3">Junior Software Developer</h2>
                  <div className="mt-3">
                    <Link className="btn-get-started" href="/services">
                      Get Started
                    </Link>
                  </div>
                </Col>
                <Col lg="6" className="col-lg-6 order-1 order-lg-2 header-img">
                  <Image
                    src={landingIMG}
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
