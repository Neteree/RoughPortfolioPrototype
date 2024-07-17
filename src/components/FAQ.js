import ListGroup from "react-bootstrap/ListGroup";
import Page from "./Page";

function FAQ() {
  return (
    <Page title={"FAQ"}>
      <div className="grid">
        <ListGroup className="list-group">
          <ListGroup.Item>Q. How much do you charge per hour?</ListGroup.Item>
          <ListGroup.Item>A. $25 an hour</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. How many years experience do you have?
          </ListGroup.Item>
          <ListGroup.Item>A. 5 years experience</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Do you have a formal education?</ListGroup.Item>
          <ListGroup.Item>A. Yes I studied at Whitecliffe</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Do you provide non web services?</ListGroup.Item>
          <ListGroup.Item>
            A. Yes, contact me to see if it can be provided
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Are you able to do a front-end in Blazor
          </ListGroup.Item>
          <ListGroup.Item>
            A. Yes, it is actually my prefered way to do it
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you looking for work currently</ListGroup.Item>
          <ListGroup.Item>
            A. Yes, I am currently looking for work
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Are you willing to teach/tutor people?
          </ListGroup.Item>
          <ListGroup.Item>
            A. Yes, I can teach how to code for the web
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you able to teach PostgreSQL?</ListGroup.Item>
          <ListGroup.Item>A. Yes, I am able to teach PostgreSQL</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Are you willing to work with other devs?
          </ListGroup.Item>
          <ListGroup.Item>
            A. Yes, I am willing to work with other devs
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. What is your average response time?
          </ListGroup.Item>
          <ListGroup.Item>
            A. 1 to 2 hours, but longer on weekends
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you open to doing rev shares?</ListGroup.Item>
          <ListGroup.Item>
            A. No, it is important that I get paid
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Do you have experience in Web Assembly?
          </ListGroup.Item>
          <ListGroup.Item>
            A. No, I don't have experience with it
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you open to part time work?</ListGroup.Item>
          <ListGroup.Item>A. Yes, I am open to part time work</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Are you experienced with cloud computing
          </ListGroup.Item>
          <ListGroup.Item>
            A. No, I don't have experience with it
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Do you have experience in Elixir?</ListGroup.Item>
          <ListGroup.Item>A. Yes, but very minimal</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Will you work for an organisation?s
          </ListGroup.Item>
          <ListGroup.Item>
            A. Yes, I will work for an organisation
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Do you do freelance work?</ListGroup.Item>
          <ListGroup.Item>A. Yes, I can do freelance work</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you willing to work remotely?</ListGroup.Item>
          <ListGroup.Item>A. Yes, I am able to work remotely</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>
            Q. Have you worked for a fang company?
          </ListGroup.Item>
          <ListGroup.Item>
            A. No, I have never worked for a fang company
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Do you have an associates degree?</ListGroup.Item>
          <ListGroup.Item>A. Yes, I have one in web development</ListGroup.Item>
        </ListGroup>

        <ListGroup className="list-group">
          <ListGroup.Item>Q. Are you currently studying?</ListGroup.Item>
          <ListGroup.Item>
            A. No, I have finished studying at Whitecliffe
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Page>
  );
}

export default FAQ;
