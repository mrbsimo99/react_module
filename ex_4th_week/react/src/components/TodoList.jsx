import { useEffect, useRef, useState, useContext, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { TodoContext } from "./TodoContext";
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

// importare useFilteredTodos e applicala a useMemo 

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const OPTIONS = { method: "GET" };

const TodoList = () => {
    // const { data } = useFetch(API_URL, OPTIONS);


    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null)
 
    // Per usare useContext >>
    const { todos: data, loading, error, reload } = useContext(TodoContext);
    // const filteredTodos = useFilteredTodos(data || [], searchTerm); // Sostituito con useMemo

     const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get("search") || ""; 

     useEffect(() => {
        setSearchTerm(query);
     }, [query])

     const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchParams( {search: searchTerm});
     }

    // Esercizio useCallback
    /*   const getSearchterm = useCallback((event) => {
       const value = event.target.value;
       setSearchTerm(value);
       return [];
   }, []); 
   */

    const filteredTodos = useMemo(() => {
        if (!data) return [];
        return data.filter((todo) =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    

    return (
        <>
            <div>
                <input ref={inputRef}
                    type="text"
                    placeholder="Inserire parola chiave"
                    className="input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                   <button type="submit" className="submit-btn" onClick={handleSearchSubmit}>Cerca</button>
                <ul className="list">
                    {filteredTodos && filteredTodos.map((item) => (
                        <li key={item.id}>
                           <Link className="links" to={`/todos/${item.id}`}>{item.title}</Link> 
                        </li>
                    ))}
                </ul>
             
            </div>

        </>
    )
}

export default TodoList;

// Bottone per gestire useSearchParams e parametri della query da restituire nella URL con quanto scritto dall'utente.