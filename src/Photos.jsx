import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Photos() {

  
  const services = [
    { name: 'Commercial', path: '/commercial', image: 'images/commercial-thumb.jpg' },
    { name: 'Residential', path: '/residential', image: 'images/residential-thumb.jpg' },
    { name: 'Air BnB', path: '/airbnb', image: 'images/airbnb-thumb.jpg' },
    { name: 'Move-In/Move-out', path: '/moving', image: 'images/moveinout-thumb.jpg' },
    { name: 'Post Construction', path: '/postconstruct', image: 'images/postconstruct-thumb.jpg' },
  ];

  return (

    <Container className="mt-5 text-center">
      <h1 className="mb-4">Our Work</h1>
      <p className="lead mb-5">
        Explore some of our best work across different cleaning services.
      </p>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={`${service.name} Cleaning`}
                />
                <Card.Body>
                  <Card.Title>{service.name} Cleaning</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
}

export default Photos;