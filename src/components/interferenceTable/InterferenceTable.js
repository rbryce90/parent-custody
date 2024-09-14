import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InterferenceTable = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      summary: "",
      date: new Date(),
      location: "",
      lawEnforcementContacted: false,
      criminalReportFiled: false,
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newRows = [...rows];
    if (type === "checkbox") {
      newRows[index][name] = checked;
    } else {
      newRows[index][name] = value;
    }
    setRows(newRows);
  };

  const handleDateChange = (index, date) => {
    const newRows = [...rows];
    newRows[index].date = date;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        summary: "",
        date: new Date(),
        location: "",
        lawEnforcementContacted: false,
        criminalReportFiled: false,
      },
    ]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  // Sort rows by date in descending order (latest first)

  return (
    <div>
      <h3>Interferences</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Date</th>
            <th>Location</th>
            <th>Law Enforcement Contacted</th>
            <th>Criminal Report Filed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>
                <Form.Control
                  type="text"
                  name="summary"
                  value={row.summary}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <DatePicker
                  selected={row.date}
                  onChange={(date) => handleDateChange(index, date)}
                  dateFormat="yyyy-MM-dd"
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="location"
                  value={row.location}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  name="lawEnforcementContacted"
                  checked={row.lawEnforcementContacted}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  name="criminalReportFiled"
                  checked={row.criminalReportFiled}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => removeRow(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={addRow} variant="primary">
        Add Row
      </Button>
    </div>
  );
};

export default InterferenceTable;
