import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Page from "./Page";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <Page title="Contact">
      <section>
        <h2>Contact methods</h2>
        <ListGroup className="ms-5 me-5 mt-0 mb-5 list-group border border-dark">
          <ListGroup.Item>Phone: 12345678910</ListGroup.Item>
          <ListGroup.Item>Email: CameronBelcher@email.com</ListGroup.Item>

          {/* 
            Here I added the to attribute to every social link on the contact page
            howver I did not want to use my actually socials, so I used the homepages of 
            the socials instead
          */}
          <ListGroup.Item>
            Facebook:{" "}
            <Link to="https://www.facebook.com/">My Facebook Link</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            Instagram:{" "}
            <Link to="https://www.instagram.com/">My Instagram Link</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            Discord:{" "}
            <Link to="https://discord.com/">My Discord Channel Link</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            LinkedIn:{" "}
            <Link to="https://www.linkedin.com/">My LinkedIn Link</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            TikTok:{" "}
            <Link to="https://www.tiktok.com/explore">My My TikTok Link</Link>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <h2>Message me</h2>
        <Form className="p-5 m-5 mt-0 gap-5 d-flex flex-column border border-dark rounded">
          <Form.Group
            className="d-flex flex-row message-form"
            controlId="formBasicTopic"
          >
            <Form.Label className="me-2">Topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a topic here"
              required
              minlength={2}
              maxlength={56}
            />
          </Form.Group>
          <Form.Group
            className="d-flex flex-row message-form"
            controlId="formBasicPhone"
          >
            <Form.Label className="me-2">Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter a number here"
              required
              min={0}
              max={99999999999999999999}
              minlength={2}
              maxlength={20}
            />
          </Form.Group>
          <Form.Group className=" d-flex flex-row" controlId="formBasicName">
            <Form.Label className="me-2">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a name here"
              required
            />
          </Form.Group>

          <Form.Group className="d-flex flex-row" controlId="formBasicEmail">
            {/*
              The label for the email input now has the content Email and from it will
              be able to tell that the input field is indeed for email input
            */}
            <Form.Label className="me-2 ">Email</Form.Label>
            <Form.Control
              type="email"
              //The placeholder for the email input now has the value "Enter an email here" therefore
              //it is clearly instructed to the user what is supposed to be entered here
              placeholder="Enter an email here"
              required
              minlength={2}
              maxlength={56}
            />
          </Form.Group>
          <Form.Group
            className=" d-flex flex-row"
            controlId="formBasicTextArea"
          >
            {/*
              The label for the email input now has the content Message and from it will
              be able to tell that the input field is indeed for message input
            */}
            <Form.Label className="me-2">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              //The placeholder for the message input now has the value "Enter a message here" therefore
              //it is clearly instructed to the user what is supposed to be entered here
              placeholder="Enter a message here"
              required
              minlength={2}
              maxlength={2048}
            />
          </Form.Group>
          <Button variant="primary m-4" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </Page>
  );
}

export default Contact;
