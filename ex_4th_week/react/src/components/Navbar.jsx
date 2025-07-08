import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <nav>
                <div>
                    <Link className="link" to="/">Home</Link>
                </div>
                <div>
                    <Link className="link" to="/todos/1">Details</Link>
                </div>
                <div>
                    <Link className="link" to="/about">About</Link>
                </div>

            </nav>
        </>
    )

}

export default Navbar;