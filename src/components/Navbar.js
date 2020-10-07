import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
    render() {
        return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">ExerciseTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Exercise List <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/createExercise">Create Exercise Log</Link>
                        <Link className="nav-link" to="/createUser">Create User</Link>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar