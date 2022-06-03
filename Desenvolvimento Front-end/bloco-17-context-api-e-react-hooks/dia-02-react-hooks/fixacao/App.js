import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoInput';

function App() {
  const [state, setState] = useState([]);

  const handleButton = (newTodo) => {
    setState(state.concat(newTodo));
  }

  return (
    <main>
      <header>
        <h2>To do list</h2>
      </header>
      <section>
        <ToDoList handleButton={handleButton} />
      </section>
      <section>
        <ul>
          {state.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </section>
    </main>
  );
}

export default App;
