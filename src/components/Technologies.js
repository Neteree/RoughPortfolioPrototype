import ListGroup from "react-bootstrap/ListGroup";
import Page from "./Page";

function Technologies() {
  return (
    <Page title={"Technologies I Use"}>
      <ListGroup className="list-group">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>NPM</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
        <ListGroup.Item>Mongoose</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>TypeScript</ListGroup.Item>
        <ListGroup.Item>Joi</ListGroup.Item>
        <ListGroup.Item>Celebrate</ListGroup.Item>
        <ListGroup.Item>C#</ListGroup.Item>
        <ListGroup.Item>.NET</ListGroup.Item>
        <ListGroup.Item>Blazor</ListGroup.Item>
        <ListGroup.Item>ASP.NET CORE</ListGroup.Item>
        <ListGroup.Item>React Router</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
    </Page>
  );
}

export default Technologies;
