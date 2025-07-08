import React, { useState } from 'react';
import { Container, Form, Button, Accordion } from 'react-bootstrap';

function DynamicModelForm() {
  const [schema, setSchema] = useState(null);
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const json = JSON.parse(event.target.result);
      setSchema(json);
      setFormData(json); // Set as initial values to edit
    };
    reader.readAsText(file);
  };

  const handleChange = (path, value) => {
    const keys = path.split('.');
    const newFormData = { ...formData };
    let obj = newFormData;

    keys.slice(0, -1).forEach((key) => {
      if (!obj[key]) obj[key] = {};
      obj = obj[key];
    });

    obj[keys[keys.length - 1]] = value;
    setFormData(newFormData);
  };

  const renderFormFields = (data, path = '') => {
    return Object.entries(data).map(([key, value], index) => {
      const fullPath = path ? `${path}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return (
          <Accordion.Item eventKey={fullPath} key={fullPath}>
            <Accordion.Header>{key}</Accordion.Header>
            <Accordion.Body>{renderFormFields(value, fullPath)}</Accordion.Body>
          </Accordion.Item>
        );
      } else {
        return (
          <Form.Group className="mb-3" key={fullPath}>
            <Form.Label>{key}</Form.Label>
            <Form.Control
              type="text"
              value={value || ''}
              onChange={(e) => handleChange(fullPath, e.target.value)}
            />
          </Form.Group>
        );
      }
    });
  };

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem('modelCards')) || [];
    localStorage.setItem('modelCards', JSON.stringify([...stored, formData]));
    alert('Saved!');
  };

  return (
    <Container className="my-4">
      <h2>Create from JSON Template</h2>
      <Form.Group className="mb-3">
        <Form.Label>Upload JSON Template</Form.Label>
        <Form.Control type="file" accept=".json" onChange={handleFileUpload} />
        {fileName && <div className="mt-2 text-muted">Loaded: {fileName}</div>}
      </Form.Group>

      {schema && (
        <>
          <Accordion alwaysOpen>
            {renderFormFields(schema)}
          </Accordion>

          <Button className="mt-4" variant="success" onClick={handleSave}>
            Save Model Card
          </Button>
        </>
      )}
    </Container>
  );
}

export default DynamicModelForm;
