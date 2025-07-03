import { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
// import { TodoContext } from "../context/TodoContext";

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const OPTIONS = { method: "GET" };

const TodoList = () => {
    const { data } = useFetch(API_URL, OPTIONS);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null)

    // Per usare useContext >>
    // const { todos: data, loading, error, reload } = useContext(TodoContext); //


    const filteredTodos = useFilteredTodos(data || [], searchTerm);


    // Esercizio useCallback
    /*   const getSearchterm = useCallback((event) => {
       const value = event.target.value;
       setSearchTerm(value);
       return [];
   }, []); 
   */

    // Esercizio useMemo
    /*   const getSearchterm = useMemo((event) => {
       const value = event.target.value;
       setSearchTerm(value);
       return [];
   }, []); 
   */

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    })

    return (
        <>
            <div>
                <input ref={inputRef}
                    type="text"
                    placeholder="Cerca"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredTodos && filteredTodos.map((item) => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default TodoList;