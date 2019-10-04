import React from 'react'
import FillForm from './FillForm'
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            directTo: false,
            check: []
        }
    }
    // handleSubmit = e => {
    //     e.preventDefault()
    // }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = (e) => {
        // if(password and confirm password are equal){
            // do stuff
        // } else {
            // don't do stuff, it would be nice to give the user a message that passwords don't match
        // }
        console.log(this.state)
        e.preventDefault() 
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirmation: this.state.confirmPassword
                }
            })
        })
        .then(r => r.json())
        .then(newUser => {
            console.log(newUser)
            // this.props.history.push('/login')
            // this.props.handleSignUp(newUser)
            // localStorage.setItem("use-token", newUser)
            this.handleDirect()
        })
        // newUser => {() => this.handleChange(newUser)}
    }
    handleDirect = () => {
        this.setState({directTo: !this.state.directTo})
    }
    redirectToLogin = () => {
        this.props.history.push('/login')
    }
    // onClick={this.handleDirect}
    render() {
        return(
            this.state.directTo ? <div><p>Thank you for your for registering</p>
            <button onClick={this.redirectToLogin}>Please log in before continuing.</button></div> :
            <div className="div-signup">
                <h2>Sign Up</h2>
                <form onSubmit={(e) => this.login(e)}>
                <label>Username</label>{"  "}
                <input onChange={this.handleChange} name="username" placeholder="Username" type="username" />
                <br />
                <label>Password</label>{" "}
                <input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                <br />
                <label>Confirm Password</label>{" "}
                <input onChange={this.handleChange} name="confirmPassword" placeholder="Confirm Password" type="password" />
                <br />
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUp)