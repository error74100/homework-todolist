import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useState } from 'react';

let data = [
  { id: 1, todo: 'todo 1', isChecked: true },
  { id: 2, todo: 'todo 2', isChecked: false },
];

function App() {
  const [todos, setTodos] = useState([...data]);
  const [isMode, setIsMode] = useState('read');
  let ID_MAX = todos.length + 1;

  const onCreate = (todo) => {
    const newTodos = [...todos, { id: ID_MAX, todo: todo, isChecked: false }];

    setTodos(newTodos);

    ID_MAX++;
  };

  const onChange = (id) => {
    const todo = [...todos];
    const newTodo = todo.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setTodos(newTodo);
  };

  const onEdit = (id) => {
    console.log(id);
    setIsMode('edit');
  };

  const onDelete = (id) => {
    const todo = [...todos];
    const newTodo = todo.filter((item) => item.id !== id);

    setTodos(newTodo);
  };

  return (
    <div className="App">
      <h2>Todo List</h2>

      <TodoCreate onCreate={onCreate} />

      <hr />

      <TodoList
        todos={todos}
        onChange={onChange}
        onDelete={onDelete}
        onEdit={onEdit}
        isMode={isMode}
      />
    </div>
  );
}

export default App;
