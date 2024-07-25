import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TodoList = ({ onCreate }) => {
  const [todo, setTodo] = useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(todo);
        setTodo('');
      }}
    >
      <Form.Group className="mb-3" controlId="todo">
        <Form.Label>할일 입력</Form.Label>
        <Form.Control
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="할일을 입력하세요"
        />
      </Form.Group>
    </Form>
  );
};

export default TodoList;
