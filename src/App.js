import "./App.css";
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import EditList from "./componentes/EditList";
import TodoList from "./componentes/Todoitem";
function App() {
  const [todoitem, settodoitem] = useState("");
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
                {x.editOption ? (
                  <EditList x={x} settodo={settodo} todo={todo} />
                ) : (
                  <TodoList x={x} todo={todo} settodo={settodo} />
                )}
              </div>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
