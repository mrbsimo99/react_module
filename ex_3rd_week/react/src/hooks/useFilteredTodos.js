import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    // crea un 'altra funzione che si occupa di fare il filtro e dentro UseEffect richiami la funzione (dagli come dipendenza solo searchTerm)
    
    const filterTodos = () => {
        return todos.filter (todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
