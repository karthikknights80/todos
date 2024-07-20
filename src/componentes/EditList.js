import React, { useState } from "react";
import "./../App.css";
import { Button } from "react-bootstrap";
const EditList = ({ item, idx, todo, setEditing }) => {
  const [editedTodo, seteditedTodo] = useState("");
  return (
    <div key={idx} className="todoItems rounded">
      <input
        placeholder={item}
        onChange={(e) => {
          seteditedTodo(e.target.value);
        }}
      />
      <div className="d-flex p-2">
        <Button
          variant="success"
          className="mx-3"
          onClick={() => {
            todo[idx].item = editedTodo;
            todo[idx].editoption = false;
            setEditing(false);
          }}
        >
          done
        </Button>
        <Button variant="danger">Cancle</Button>
      </div>
    </div>
  );
};

export default EditList;
