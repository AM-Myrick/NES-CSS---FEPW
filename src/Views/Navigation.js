import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css"



const Navigation = props => {
    return (
        localStorage.getItem("access_token") ?
        <nav className="container">
            <h1>Lambda Notes</h1>
            <div className="btn-container">
                <NavLink to="/all-notes" className="btn is-success">View Your Notes</NavLink>
                <NavLink to="/add-note" className="btn is-success">+ Create New Note</NavLink>
                <NavLink to="/login" className="btn is-success" onClick={() => localStorage.removeItem("access_token")}>Logout</NavLink>
            </div>
        </nav> :
        <nav className="container">
            <h1>Lambda Notes</h1>
            <div className="btn-container">
                <NavLink to="/" className="btn is-success">Join Lambda Notes!</NavLink>
                <NavLink to="/login" className="btn is-success">Login to Lambda Notes!</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;