import React, { useState } from 'react';
import { ImagesData } from './images.data';
import { Card, Button, Col, Image, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const [items] = useState(ImagesData);

  return (
    <div>
      <h1>REFUNDO APP</h1>
      <img
        style={{ marginLeft: '76em', marginTop: '-5em', width: '3em', borderRadius: '50%' }}
        src={localStorage.getItem('profilePic')}
        alt="User Profile"
      />
      <Dropdown>
        <Dropdown.Toggle
          style={{ marginLeft: '71em', marginTop: '-8em' }}
          variant="dark"
          className="button"
        >
          +
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Transaction History</Dropdown.Item>
          <Dropdown.Item href="#">Refund Status</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Item href="#">Terms and Conditions</Dropdown.Item>
          <Dropdown.Item href="#">Help Desk</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h5 style={{ marginTop: '-2.5em' }}>Hey {localStorage.getItem('name')}! We have a list of popular app's for you</h5>
      {items.map((item) => (
        <div className="d-inline-flex" style={{ marginTop: '3%' }} key={item.Name}>
          <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '13rem' }}>
            <Card.Img
              style={{ height: '15rem' }}
              className="p-2"
              variant="top"
              src={require(`./images/appimg/amazon.png`)} // Corrected import path
              alt={item.Name}
            />
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>
                <p>
                  <a href={item.track} target="_blank" rel="noopener noreferrer">
                    Track
                  </a>
                </p>
              </Card.Text>
              <h8>
                Guidelines:
                <p>
                  <a href={item.guid} target="_blank" rel="noopener noreferrer">
                    Guidelines
                  </a>
                </p>
              </h8>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Main;
