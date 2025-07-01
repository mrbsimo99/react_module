import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, error, loading, reload } = useFetch(API_URL, { method: "GET" });
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTodos = useFilteredTodos(data || [], searchTerm);

     /*   const getSearchterm = useCallback((event) => {
        const value = event.target.value;
        setSearchTerm(value);
        return [];
    }, []); 
    */

    return (
        <>
        <div>
            <input
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