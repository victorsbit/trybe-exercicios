import { useState } from 'react';

function ToDoList({ handleButton }) {
  const [input, setState] = useState('');

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
        onClick={ () => handleButton(input) }
      >
        Add Task
      </button>
    </div>
  )
}

export default ToDoList;
