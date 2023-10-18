import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';
import { Button, Image, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
    <header className="header">
       <Col style={{marginLeft:`25em`,marginBottom:`3em`}} xs={6} md={4} className="imageContainer">
        <Image style={{width:`30em`,height:`20em`}}className="image" src={require(`./images/l1.jpg`)} rounded />
      </Col>
      <h4 style={{marginLeft:`25em`,marginTop:`-1em`}}>REFUNDO</h4>
      <Link to="./Login">
       <Button style={{marginLeft:`37em`,marginTop:`2em`}} variant="dark" className="button">Know More</Button>
      </Link>
    </header>
    </div>
  )
}

export default Home