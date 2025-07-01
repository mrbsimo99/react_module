import { useState, useEffect } from "react";

export const useFilteredTodos = (todos, searchTerm) => {
  /* const [filteredTodos, setFilteredTodos] = useState([]);
 
     useEffect(() => {
         const filtered = todos.filter(todo =>
             todo.title.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setFilteredTodos(filtered);
     }, [todos, searchTerm]);
 
     return filteredTodos;
 
     */

  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
