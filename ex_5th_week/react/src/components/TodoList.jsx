import { useEffect, useRef, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setTodoList, setError, setCompletedTodo } from "../store/slices/listSlice";
import { Link, useSearchParams } from "react-router-dom";

const TodoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("search") || "";

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const loading = useSelector((state) => state.todos.loading);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        const fetchTodos = async () => {
            dispatch(setLoading());
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await res.json();
                dispatch(setTodoList(data));
            } catch (err) {
                dispatch(setError(err.message));
            }
        };

        if (!todos || todos.length === 0) {
            fetchTodos();
        }
    }, [dispatch, todos]);

    useEffect(() => {
        setSearchTerm(query);
    }, [query]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ search: searchTerm });
    }

    const handleSetCompletedTodo = (id) => {
        dispatch(setCompletedTodo(id));
    }


    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        return todos.filter((todo) =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Inserire parola chiave"
                className="input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="submit" className="submit-btn" onClick={handleSearchSubmit}>
                Cerca
            </button>

            <ul className="list">
                {filteredTodos.map((item) => (
                    <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleSetCompletedTodo(item.id)}
                        />
                        <Link className="links" to={`/todos/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
