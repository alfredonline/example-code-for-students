import React from "react";
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table";
import "./App.css";

function View(props) {
  const buildRows = () => {
    let createdRows = props.todos.map((current) => {
      return (
        <tr key={current.id}>
          <td>{current.id}</td>
          <td>{current.task}</td>
          <td>{current.complete ? "yes" : "no"}</td>
        </tr>
      );
    });
    return createdRows;
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>complete</th>
          </tr>
        </thead>
        <tbody>{buildRows()}</tbody>
        <Link to="/">Allow me to add a todo</Link>
      </Table>
    </>
  );
}
export default View;
