import { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }) {
  const [ToDoList, setState] = useState([]);

  const updateList = (newTodo) => {
    setState((prevState) => [...prevState, newTodo]);
  }

  const MyContextValue = {
    ToDoList,
    updateList,
  }

  return (
    <MyContext.Provider value={ MyContextValue }>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;
