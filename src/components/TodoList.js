import TodoItem from './TodoItem';

const ListTodo = ({ todos, onChange, onDelete, onUpdate }) => {
  return (
    <>
      {todos.map((item) => {
        return <TodoItem key={item.id} todos={item} onChange={onChange} onDelete={onDelete} onUpdate={onUpdate} />;
      })}
    </>
  );
};

export default ListTodo;
