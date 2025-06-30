import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, error, loading, reload } = useFetch(API_URL, { method: "GET" });

    return (
        <>
            <ul>
                {data && data.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;