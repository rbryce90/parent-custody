import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function DocumentUpdate() {
  const [files, setFiles] = useState([]);
  console.log("files ===> ", files);
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    console.log("selectedFiles ==> ", selectedFiles);
    setFiles(Array.from(selectedFiles));
  };
  return (
    <div>
      <h3>Update Documents</h3>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Update Related Documents</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
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
