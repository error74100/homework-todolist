import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const TodoItem = ({ todos, onChange, onDelete, onUpdate }) => {
  const [mode, setMode] = useState('read');
  const [text, setText] = useState(todos.todo);
  let className = '';
  let classHidden = 'hidden';

  if (mode === 'edit') {
    className = 'hidden';
    classHidden = '';
  }

  return (
    <>
      <Form className={`d-flex gap-2 align-items-center ${className}`} style={{ padding: '5px 0' }}>
        <Form.Check // prettier-ignore
          type="checkbox"
          id={`chk-${todos.id}`}
          label={todos.todo}
          checked={todos.isChecked}
          onChange={() => {
            onChange(todos.id);
          }}
        />
        <Button
          variant="danger"
          size="sm"
          onClick={() => {
            onDelete(todos.id);
          }}
        >
          Delete
        </Button>
        <Button
          variant="info"
          size="sm"
          onClick={() => {
            setMode('edit');
          }}
        >
          Edit
        </Button>
      </Form>

      <Form.Group
        controlId={`chk_edit_${todos.id}`}
        className={`d-flex align-items-center gap-2 ${classHidden}`}
        style={{ padding: '5px 0' }}
      >
        <Form.Check // prettier-ignore
          type="checkbox"
          id={`chk-edit-${todos.id}`}
          checked={todos.isChecked}
          onChange={() => {
            onChange(todos.id);
          }}
        />
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          variant="success"
          size="sm"
          onClick={() => {
            onUpdate(todos.id, text);
            setMode('read');
          }}
        >
          Update
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setMode('read');
            setText(todos.todo);
          }}
        >
          Cancle
        </Button>
      </Form.Group>
    </>
  );
};

export default TodoItem;
