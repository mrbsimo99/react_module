import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../components/TodoContext";

const Details = () => {
    const { id } = useParams();
    const { todos } = useContext(TodoContext);

    const todo = todos.find((t) => t.id.toString() === id);

    if (!todo) {
        return <p>Todo non trovato</p>;
    }

    return (
        <>
            <h2>Id: {todo.id}</h2>
            <h2>UserId: {todo.userId}</h2>
            <h2>Title: {todo.title}</h2>
        </>
    );
};

export default Details;
