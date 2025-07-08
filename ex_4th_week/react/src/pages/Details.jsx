import { useContext } from "react"
import { useParams } from "react-router"
import { TodoContext } from "../components/TodoContext"


const Details = () => {
    const {userId} = useParams()
    const { todos } = useContext(TodoContext)

     const userTodos = todos.filter(todo => todo.userId === parseInt(userId));

    return (
        <>
           <p>Dettagli: {userId}</p>
        </>
    )
}

export default Details;