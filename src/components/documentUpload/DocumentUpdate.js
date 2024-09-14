import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function DocumentUpdate() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(Array.from(selectedFiles));
  };
  return (
    <div>
      <h3>Update Documents</h3>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Update Related Documents</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>

      {files.length ? (
        <div>
          <h5>Selected Files:</h5>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file?.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
