import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditList = ({ x, settodo, todo }) => {
  const [editedTodo, seteditedTodo] = useState("");
  const doneHandler = (i) => {
    const updatedTodo = todo.map((y) => {
      if (y.idx === i) {
        y.editOption = false;
        y.item = editedTodo;
      }
      return y;
    });
    settodo(updatedTodo);
  };
  return (
    <>
      <input
        placeholder={x.item}
        onChange={(e) => {
          seteditedTodo(e.target.value);
        }}
      />
      <div className="d-flex p-2">
        <Button
          variant="success"
          className="mx-3"
          onClick={() => {
            doneHandler(x.idx);
          }}
        >
          Done
        </Button>
        {/* <Button
                        variant="danger"
                        onClick={() => {
                          deleteHandler(x.idx);
                        }}
                      >
                        Delete
                      </Button> */}
      </div>
    </>
  );
};

export default EditList;
