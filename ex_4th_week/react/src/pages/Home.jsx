// "/" http://localhost:PORT/

import TodoList from "../components/TodoList";
import { TodoProvider } from "../components/TodoContext";

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        </>
    )


}

export default Home;