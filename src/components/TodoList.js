import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TodoItem from './TodoItem';

const ListTodo = ({ todos, onChange, onDelete, onEdit, isMode }) => {
  return (
    <>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todos={item}
            onChange={onChange}
            onDelete={onDelete}
            onEdit={onEdit}
            isMode={isMode}
          />
        );
      })}
    </>
  );
};

export default ListTodo;
