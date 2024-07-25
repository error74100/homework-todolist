import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TodoItem = ({ todos, onChange, onDelete, onEdit, isMode }) => {
  console.log(isMode);

  return (
    <>
      <Form className="d-flex gap-2 p-2 align-items-center">
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
            onEdit(todos.id);
          }}
        >
          Edit
        </Button>
      </Form>

      <div className="d-flex align-items-center gap-2">
        <Form.Group controlId={`chk_edit_${todos.id}`}>
          <Form.Control
            type="text"
            value="기존 입력값"
            onChange={() => {
              console.log(111);
            }}
          />
        </Form.Group>
        <Button variant="success" size="sm">
          Update
        </Button>
        <Button variant="secondary" size="sm">
          Cancle
        </Button>
      </div>
    </>
  );
};

export default TodoItem;
