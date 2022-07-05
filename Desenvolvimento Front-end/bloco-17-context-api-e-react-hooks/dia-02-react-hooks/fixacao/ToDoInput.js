import { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function ToDoList() {
  const [input, setState] = useState('');
  const { updateList } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setState(target.value);
  }

  return (
    <div>
      <label htmlFor='task-input'>
        Write a task:
        <input
          type='text'
          id='task-input'
          onChange={handleChange}
        />
      </label>
      <button
        type='button'
        onClick={ () => updateList(input) }
      >
        Add Task
      </button>
    </div>
  )
}

export default ToDoList;
