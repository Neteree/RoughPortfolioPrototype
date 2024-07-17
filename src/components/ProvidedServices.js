import { Link } from "react-router-dom";
import Page from "./Page";
import Card from "react-bootstrap/Card";
import WebScrapingImage from "../images/webscraping.png";
import FrontendImage from "../images/frontend.png";
import BackendImage from "../images/backend.png";
import FullStackImage from "../images/fullstack.png";
import HTMLImage from "../images/html.png";
import CSSImage from "../images/css.png";
import JavaScriptImage from "../images/javascript.png";
import ReactImage from "../images/react.png";
import nodeImage from "../images/node.png";
import ExpressImage from "../images/express.png";
import BootstrapImage from "../images/bootstrap.png";
import BlazorImage from "../images/blazor.png";

function ProvidedServices() {
  return (
    <Page title={"Cameron Belcher Web Developer"}>
      <div className="grid">
        <Card className="card provided-services-card flex-row">
          <Card.Img src={WebScrapingImage} />
          <Card.Body>
            <Card.Title>Web Scraping</Card.Title>
            <Card.Text>
              Sometimes websites won't provide a nice api in order for you to
              get data from. By building a web scraper for you, you will be able
              to get the data that you need from the desired website/websites.
              If you would like to see an example of a web scraper I have built
              please look at <Link to="#">my web scraper GitHub project</Link>{" "}
              here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={FrontendImage} />
          <Card.Body>
            <Card.Title>Front-end</Card.Title>
            <Card.Text>
              I am able to build front-ends for websites, work on previously
              developed front-ends and connect them up with backends/apis. If
              you would like to see an example of a frontend I have built in the
              past please look at{" "}
              <Link to="#">my front-end GitHub project</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={BackendImage} />
          <Card.Body>
            <Card.Title>Back-end</Card.Title>
            <Card.Text>
              I am able to build back-ends/apis for websites, work on previously
              developed back-ends and connect them up with front-ends. If you
              would like to see an example of an api I have built in the past
              please look at my <Link to="#">backend-end GitHub project</Link>{" "}
              here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={FullStackImage} />
          <Card.Body>
            <Card.Title>Full Stack</Card.Title>
            <Card.Text>
              I am able to build full stack websites, previously developed full
              stack websites and connect up the front-end with the back-end. If
              you would like to see an example of a full stack website I have
              built in the past please look at{" "}
              <Link to="#">my full stack GitHub project</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={HTMLImage} />
          <Card.Body>
            <Card.Title>HTML Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of HTML on your journey to
              becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my HTML lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={CSSImage} />
          <Card.Body>
            <Card.Title>CSS Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of CSS on your journey to
              becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my CSS lesson example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={JavaScriptImage} />
          <Card.Body>
            <Card.Title>JavaScript Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of JavaScript on your
              journey to becoming a web developer yourself. If you would like to
              see an example of what we will make during our lessons visit{" "}
              <Link to="#">my JavaScript lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={ReactImage} />
          <Card.Body>
            <Card.Title>React Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of React on your journey to
              becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my React lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card provided-services-card flex-row">
          <Card.Img src={nodeImage} />
          <Card.Body>
            <Card.Title>Node Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of Node on your journey to
              becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my Node lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={ExpressImage} />
          <Card.Body>
            <Card.Title>Express Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of Express on your journey
              to becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my Express lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card provided-services-card flex-row">
          <Card.Img src={BootstrapImage} className="tech-img" />
          <Card.Body>
            <Card.Title>Bootstrap Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of Bootstrap on your
              journey to becoming a web developer yourself. If you would like to
              see an example of what we will make during our lessons visit{" "}
              <Link to="#">my Bootstrap lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card provided-services-card flex-row">
          <Card.Img src={BlazorImage} />
          <Card.Body>
            <Card.Title>Blazor Lessons</Card.Title>
            <Card.Text>
              Here I will teach you the ins and outs of Node on your journey to
              becoming a web developer yourself. If you would like to see an
              example of what we will make during our lessons visit{" "}
              <Link to="#">my Blazor lessons example</Link> here
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
}

export default ProvidedServices;
