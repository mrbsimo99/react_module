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
        alert(`${username} ${password}`);
    };
    // console.log(form)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onInput={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onInput={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Entra</button>
                </div>
            </form>
        </div>
    );
};
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


export default LoginForm;