import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModelMarketplace = () => {
  const [modelCards, setModelCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('modelCards')) || [];
    setModelCards(storedCards);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedCards = modelCards.filter((_, index) => index !== indexToDelete);
    setModelCards(updatedCards);
    localStorage.setItem('modelCards', JSON.stringify(updatedCards));
  };

  const filteredCards = modelCards.filter((card) =>
    card['model_details']?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Model Marketplace</h2>
      <Form className="mb-4">
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Search model cards by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCards.map((card, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{card['model_details']?.name || 'Unnamed Model'}</Card.Title>
                <Card.Text>{card['model_details']?.overview}</Card.Text>
                <Button as={Link} to={`/card/${index}`} variant="primary" className="me-2">
                  View
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ModelMarketplace;

