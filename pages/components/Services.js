import Image from 'next/image'
import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'
import Project from "../../assets/software.jpeg"

export default function Services() {
  return (
    <>
     
     <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <Row>
          <Col className="col-10 mx-auto">
            <Row className=" gy-4">

              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
 
              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
 
              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className=" col-12 mx-auto">
                <Card>
                  <Image
                    src={Project}
                    className="card-img-top h-100"
                    width={"100%"}
                    height="100%"
                  />
                  <CardBody>
                    <CardTitle className=" font-weight-bold">
                      Software development
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary ">Check Now</Button>
                  </CardBody>
                </Card>
              </Col>
 
            </Row>
          </Col>
        </Row>
      </div> 
    </>
  )
}
