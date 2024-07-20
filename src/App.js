import "./App.css";
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
function App() {
  const [todoitem, settodoitem] = useState({});
  const [todo, settodo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const todoList = [
      { idx: todo.length, item: todoitem, editOption: false },
      ...todo,
    ];
    settodo(todoList);
    console.log(todo);
  };
  const deleteHandler = (i) => {
    console.log(i, todo);
    const updatedTodo = todo.filter((x) => x.idx !== i);
    settodo(updatedTodo);
  };
  return (
    <div className="App my-5">
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Todo"
              onChange={(e) => {
                settodoitem(e.target.value);
              }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <ul>
          {todo.map((x, i) => {
            return (
              <div key={i} className="todoItems rounded">
                <li className="my-2 rounded p-2 ">{x.item}</li>
                <div className="d-flex p-2">
                  <Button variant="success" className="mx-3">
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
              </div>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
