import { Link } from "react-router-dom";
import Page from "./Page";
import Card from "react-bootstrap/Card";
import ProvidedServicesImage from "../images/providedservices.jpg";
import TechnologiesImage from "../images/technologies.jpg";
import FAQImage from "../images/faq.jpg";
import ContactImage from "../images/contact.jpg";

function Home() {
  return (
    <Page title={"Cameron Belcher Web Developer"}>
      <Card className="card flex-row">
        <Card.Img src={ProvidedServicesImage} />
        <Card.Body>
          <Card.Title>Provided Services</Card.Title>
          <Card.Text>
            Here is a list of services that I am currently providing at the
            moment. All of the services that I provide are web related. This
            includes building a front-end, api, teaching web development and
            anything else you may need. Please visit{" "}
            <Link to="/ProvidedServices">Provided Services</Link> if you would
            like to find out more about what I have to offer
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card flex-row">
        <Card.Img src={TechnologiesImage} />
        <Card.Body>
          <Card.Title>Technologies I Use</Card.Title>
          <Card.Text>
            As a web developer I use a wide range of technologies to provide the
            services I offer. Some of the technologies I use are HTML, CSS,
            JavaScript and React. Please visit{" "}
            <Link to="/Technologies">Technologies I Use</Link> if you would like
            to see the full list of technologies that I use for web development
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card flex-row">
        <Card.Img src={FAQImage} />
        <Card.Body>
          <Card.Title>FAQ</Card.Title>
          <Card.Text>
            There are questions that I get asked a lot as a web developer, so I
            have gathered the ones I believe to be the most important/helpful.
            Please visit the <Link to="/FAQ">FAQ page</Link> if you believe that
            the question is the kind of question that would be frequently asked
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card flex-row">
        <Card.Img src={ContactImage} />
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            Here you can contact me directly or find various methods of how to
            contact me. Here I am will to discuss with you about a potential job
            or any web dev related queries. Please visit the{" "}
            <Link>contact page</Link> if you would like to contact me and/or
            have any questions
          </Card.Text>
        </Card.Body>
      </Card>
    </Page>
  );
}

export default Home;
