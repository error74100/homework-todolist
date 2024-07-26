import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

// let data = [
//   { id: 1, todo: 'todo 1', isChecked: true },
//   { id: 2, todo: 'todo 2', isChecked: false },
// ];

function App() {
  const [todos, setTodos] = useState(null);
  let ID_MAX = 2;

  useEffect(() => {
    const isData = localStorage.getItem('todos');

    setTodos(JSON.parse(isData));
  }, []);

  const setStorage = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const isData = localStorage.getItem('todos');

  if (isData !== null) {
    const maxNum = JSON.parse(isData);

    maxNum.forEach((item) => {
      if (ID_MAX < item.id) {
        ID_MAX = item.id;
      }
    });
  }

  const onCreate = (todo) => {
    const newTodos = [
      ...todos,
      { id: ID_MAX + 1, todo: todo, isChecked: false },
    ];

    setTodos(newTodos);
    setStorage(newTodos);

    ID_MAX++;
  };

  const onChange = (id) => {
    const todo = [...todos];
    const newTodos = todo.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setTodos(newTodos);
    setStorage(newTodos);
  };

  const onUpdate = (id, text) => {
    const todo = [...todos];
    const newTodos = todo.map((item) =>
      item.id === id ? { ...item, todo: text } : item
    );

    setTodos(newTodos);
    setStorage(newTodos);
  };

  const onDelete = (id) => {
    const todo = [...todos];
    const newTodos = todo.filter((item) => item.id !== id);

    setTodos(newTodos);
    setStorage(newTodos);
  };

  return (
    <div className="App">
      <h2>Todo List</h2>

      <TodoCreate onCreate={onCreate} />

      <hr />

      {todos && (
        <TodoList
          todos={todos}
          onChange={onChange}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}

export default App;
