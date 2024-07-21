import React from "react";
import { Button } from "react-bootstrap";

const TodoList = ({ x, i, todo, settodo }) => {
  const deleteHandler = (i) => {
    console.log(i, todo);
    const updatedTodo = todo.filter((x) => x.idx !== i);
    settodo(updatedTodo);
  };
  const editHanler = (i) => {
    const updatedTodo = todo.map((x) => {
      if (x.idx === i) {
        x.editOption = true;
      }
      return x;
    });
    settodo(updatedTodo);
  };
  return (
    <>
      <li className="my-2 rounded p-2 ">{x.item}</li>
      <div className="d-flex p-2">
        <Button
          variant="success"
          className="mx-3"
          onClick={() => {
            editHanler(x.idx);
          }}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteHandler(x.idx);
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default TodoList;
