import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function Contact() {
    return (
        <>
            <div class="my-5">
                <h1 class="text-center"> Contact US </h1>
            </div>
            <Container class="contact_div">
                <Row>
                    <Col class="col-md-3 col-10 mx-auto">
                        <Form>
                            <FormGroup>
                                <Label for="exampleFormControlInput1" class="form-label">
                                    FullName
                                </Label>
                                <Input
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter your name"
                                    value=""
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </Label>
                                <Input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    placeholder="mobile number"
                                    value=""
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </Label>
                                <Input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    placeholder="name@example.com"
                                    value=""
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </Label>
                                <Input
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    type="textarea"
                                ></Input>
                            </FormGroup>
                            <div class="col-12">
                                <Button outline color="primary" type="submit">
                                    Submit form
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
