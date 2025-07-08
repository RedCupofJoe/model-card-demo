import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

const ModelCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const modelCards = JSON.parse(localStorage.getItem('modelCards') || '[]');
  const card = modelCards[id];

  if (!card) return <div className="container mt-4">Model card not found.</div>;

  const renderObject = (obj) => {
    if (Array.isArray(obj)) {
      return (
        <ul>
          {obj.map((item, i) => (
            <li key={i}>{renderObject(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof obj === 'object' && obj !== null) {
      return (
        <div className="ms-3">
          {Object.entries(obj).map(([key, value]) => (
            <div key={key} className="mb-2">
              <strong>{key}:</strong> {renderObject(value)}
            </div>
          ))}
        </div>
      );
    } else {
      return <span>{String(obj)}</span>;
    }
  };

  return (
    <div className="container py-4">
      <h2>Model Card Details</h2>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <Accordion defaultActiveKey="0">
        {Object.entries(card).map(([sectionName, sectionData], i) => (
          <Accordion.Item eventKey={String(i)} key={sectionName}>
            <Accordion.Header>{sectionName}</Accordion.Header>
            <Accordion.Body>{renderObject(sectionData)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ModelCardDetail;
