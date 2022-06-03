import './App.css';
import { useContext } from 'react';
import ToDoList from './components/ToDoInput';
import MyContext from './context/MyContext';

function App() {
  const state = useContext(MyContext);

  return (
    <main>
      <header>
        <h2>To do list</h2>
      </header>
      <section>
        <ToDoList />
      </section>
      <section>
        <ul>
          {state.ToDoList.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </section>
    </main>
  );
}

export default App;
