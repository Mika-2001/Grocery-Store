import React from 'react';
import { Figure, Row, Col } from 'react-bootstrap';

export default function About({ totalPrice }) {
  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>Learn more about our company and team!</p>

    

      <div className="d-flex justify-content-center mb-4">
        <Figure>
          <Figure.Image
            width={300} 
            height={100} 
            alt="Store Logo"
            src="https://static.israel21c.org/www/uploads/2021/06/grocery-shopping.jpg"  
          />
          <Figure.Caption>
            Welcome to our Grocery Store!
          </Figure.Caption>
        </Figure>
      </div>

      
      <Row className="mt-4">
        <Col xs={12} md={4} className="mb-3 d-flex justify-content-center">
          <Figure>
            <Figure.Image
              width={250} 
              height={150} 
              alt="Store Image 1"
              src="https://cdn.arcadiafinance.co.za/wp-content/uploads/2024/09/Grocery-List-South-Africa-Tips-and-Hacks.jpg?cdn=1.0.3"  
            />
            <Figure.Caption>
              Our store providing high-quality products.
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} md={4} className="mb-3 d-flex justify-content-center">
          <Figure>
            <Figure.Image
              width={250} 
              height={150}
              alt="Store Image 2"
              src="https://foodtank.com/wp-content/uploads/2021/09/gemma-stpjHJGqZyw-unsplash.jpg"  
            />
            <Figure.Caption>
              Innovation and creativity at work.
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} md={4} className="mb-3 d-flex justify-content-center">
          <Figure>
            <Figure.Image
              width={250} 
              height={150}
              alt="Store Image 3"
              src="https://echo360.com/wp-content/uploads/2024/11/AdobeStock_944648600-scaled.jpeg"  
            />
            <Figure.Caption>
              Providing great service to our customers.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <div className="mt-4">
        <h2>How to Contact Us</h2>
        <p>If you have any questions or would like to get in touch with us, here's how:</p>
        <ul>
          <li><strong>Email:</strong> contact@myonlinestore.com</li>
          <li><strong>Phone:</strong> (+27) 123-4567</li>
          <li><strong>Address:</strong> 123 Main Street, Cape Town, South Africa</li>
        </ul>
      </div>
    </div>
  );
}
