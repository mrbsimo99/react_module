// "/" http://localhost:PORT/about

import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    const RedirectHome = () => {
        navigate('/')
    }

    return (
        <>
            <h1>About</h1>
            <button onClick={RedirectHome}>Redirect to Home</button>
        </>
    )


}

export default About;