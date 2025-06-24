import { useState } from "react";


const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /* const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((form) => ({
            ...form,
            [name]: value,
        }))
    }

    */

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${form.username} ${form.password}`)
        // console.log(form)
    }



    return (
        <>

        </>
    )
         /* <>
             <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" onInput={handleInput} value={form.username} id="username" name="username" placeholder="Inserire username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" onInput={handleInput} value={form.password} id="password" name="password" placeholder="Inserire password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    ) */
}

export default LoginForm;