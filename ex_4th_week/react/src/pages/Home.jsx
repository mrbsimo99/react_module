// "/" http://localhost:PORT/

import TodoList from "../components/TodoList";
import { TodoProvider } from "../components/TodoContext";

const Home = () => {

    return (
        <>
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        </>
    )


}

export default Home;