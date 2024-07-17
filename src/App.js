//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import ProvidedServices from "./components/ProvidedServices";
import Technologies from "./components/Technologies";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
//Here you can see we have imported the NotFound component/page we have created
//from our components directory/folder in App.js
import NotFound from "./components/NotFound";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import profilePic from "./images/profilepic.jpg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={profilePic}
                width="30"
                height="30"
                className="d-inline-block align-top portfolio-image"
              />
              <span className="portfolio-name">Cameron Belcher</span>
            </Navbar.Brand>
            <Nav className="nav-links">
              <Nav.Link href="/ProvidedServices" className="link-primary">
                ProvidedServices
              </Nav.Link>
              <Nav.Link href="/Technologies" className="link-primary">
                Technologies I Use
              </Nav.Link>
              <Nav.Link href="/FAQ" className="link-primary">
                FAQ
              </Nav.Link>
              <Nav.Link href="/Contact" className="link-primary">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
         Fixed the typo in the Route component for the path attribute which was resulting in the ProvidedServices Component/Page
         not being rendered in this case it was simply missing an s at the end
         */}
        <Route path="/ProvidedServices" element={<ProvidedServices />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Contact" element={<Contact />} />
        {/* 
         Now when the user tries to any page that does not exist they will
         be redirected to the NotFound page/the NotFound page will be rendered
         and they will clearly be able to see that the page they are trying 
         does indeed not actually exist 
        */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
