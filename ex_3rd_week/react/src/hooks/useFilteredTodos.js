import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterTodos = () => {
        return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    useEffect(() => {
        const filtered = filterTodos();
        setFilteredTodos(filtered);

    }, [searchTerm, todos]);



    return filteredTodos;



    /* return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    */
};
