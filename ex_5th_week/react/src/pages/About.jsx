// "/" http://localhost:PORT/about

import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    const HandleRedirect = () => {
        navigate('/')
    }

    return (
        <>
            <h1>About</h1>
            <button className="about-btn" onClick={HandleRedirect}>Redirect to Home</button>
        </>
    )


}

export default About;