import React from 'react'
import FillForm from './FillForm'
import { withRouter } from 'react-router-dom'

class LogIn extends React.Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    // checkCredentials = () => {
    //     if (data.username == e.target[0].value && data.password == e.target[1].value) {
    //         <Entrepreneur />
    //     }
    //     else {
    //         console.log("Invalid username or password")
    //     }
    // }
   
    login = e => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(data => {
            localStorage.token = data.token
            localStorage.id = data.id
            this.props.history.push('/')
            // localStorage.setItem("use-token", data)
            console.log(data)
        })
    }
    render() {
        return(
            <div className="div-login">
                <h2>Log In</h2>
                <form onSubmit={(e) => this.login(e)}>
                <label>Username</label>{"  "}
                <input onChange={this.handleChange} name="username" placeholder="Username" type="username" />
                <br />
                <label>Password</label>{"  "}
                <input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                <br />
                <input type="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(LogIn)