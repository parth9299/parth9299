import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [toSend, setToSend] = useState({
    fullname: "",
    phone: "",
    email: "",
    textarea: "",
  });
console.log(toSend,"toSend");
  const inputValue = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  // const sendEmail = (preData) => {
  //   return setContactData(data, ...preData);
  // };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_btz86ko`,
        `template_trlwpqv`,
        form.current,
        `l2oKVVPHTZ4X5CF2WrDS_`
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <>
      <div class="my-5">
        <h1 class="text-center"> Contact US </h1>
      </div>
      <div class=" container contact_div">
        <Row>
          <div class="col-md-6 col-10 mx-auto">
            <Form ref={form} onSubmit={sendEmail}>
              <FormGroup>
                <Label for="fullname" class="form-label">
                  FullName
                </Label>
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your name"
                  // value={toSend.fullname}
                  // onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="number" class="form-label">
                  Phone
                </Label>
                <Input
                  type="text"
                  class="form-control"
                  id="number"
                  name="phone"
                  placeholder="mobile number"
                  // value={toSend.number}
                  // onChange={inputValue}
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
                  // value={toSend.email}
                  // onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="textarea" class="form-label">
                  Message
                </Label>
                <Input
                  class="form-control"
                  id="textarea"
                  rows="3"
                  name="textarea"
                  type="textarea"
                  // value={toSend.textarea}
                  // onChange={inputValue}
                ></Input>
              </FormGroup>
              <div class="col-12">
                <Button
                  outline
                  color="primary"
                  type="submit"
                  onClick={sendEmail}
                >
                  Submit form
                </Button>
              </div>
            </Form>
          </div>
        </Row>
      </div>
    </>
  );
}
