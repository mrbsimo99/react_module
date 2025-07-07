import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const TodoContext = createContext();

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const OPTIONS = { method: "GET" };

export const TodoProvider = ({ children }) => {
    const { data: todos, error, loading, reload } = useFetch(API_URL, OPTIONS);

    return (
        <TodoContext.Provider value={{ todos: todos || [], error, loading, reload }}>
            {children}
        </TodoContext.Provider>
    );
};