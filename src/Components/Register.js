import React, { Component } from 'react';
import axios from "axios";
import "./Register.css";

const URL = "https://nameless-cliffs-24621.herokuapp.com";

const initialUser = {
    username: "",
    password: "",
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { ...initialUser },
            message: "",
        }
    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ user: { ...this.state.user, [name]: value }})
    }

    submitHandler = (e) => {
        console.log("submitted");
        e.preventDefault();
        axios.post(`${URL}/api/register`, this.state.user)
            .then(res => {
                if (res.data) {
                    this.setState({
                        message: "Registration successful",
                        user: {...initialUser}
                    })
                    this.props.history.push('/login');
                } else {
                    throw new Error();
                }
            })
            .catch(err => {
                this.setState({
                    message: "Registration failed",
                    user: {...initialUser}
                })
            });
    }
    
    render() {
        return (
            <div className="register">
                <h3>Please Register</h3>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="input" 
                        value={this.state.user.username}
                        onChange={this.changeHandler} />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        className="input"
                        value={this.state.user.password}
                        onChange={this.changeHandler} />
                    <button type="submit" className="btn is-success">Register</button>
                </form>
                { this.state.message ?
                    (<h4>{this.state.message}</h4>):
                    undefined}
            </div>
        );
    }
}

export default Register;