import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome, FaHandshake } from 'react-icons/fa'
import Logo from './logo.svg'
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import Entrepreneurs from './Entrepreneurs'
import Error from './Error'
import { withRouter } from 'react-router-dom'


class NavBar extends React.Component {
    state = {
        isOpen: false,
        query: "",
        searchResult: []
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    handleQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // || all.includes(all.country) || all.includes(all.continent) || all.includes(all.reason) || all.includes(all.amount)
    handleResult = () => {
        // let a 
        // this.setState({
        //     searchResult: this.props.entrepreneurs.map(all => all.name.includes(this.state.query) || all.country.includes(this.state.query) || all.continent.includes(this.state.query) || all.reason.includes(this.state.query) || all.amount.includes(this.state.query)
        //      ? this.props.history.push('/entrepreneurs') : this.props.history.push('/*')
        //     )
        // })
        if(this.props.entrepreneurs.map(all => all.name.includes(this.state.query) || all.country.includes(this.state.query) || all.continent.includes(this.state.query) || all.reason.includes(this.state.query) || all.amount.includes(this.state.query))) {
            this.props.history.push('/entrepreneurs')
        }
        else {
            this.props.history.push('/*')
        }

    }
    directToDonate = () => {
        this.props.history.push('/donate')
    }
    logOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    // redirectOnQuery = () => {
    //     this.props.history.push('/entrepreneurs') || this.props.history.push('/*')
    // }
    render() {
        return(
            // <div className="ui inverted red menu">
            //     <div className="item">
            //     <h2 className="ui header">
            //         <div className="App-link">
            //             <Link to="/signup" style={{color: "black"}}>SignUp</Link>
            //         </div>
            //     </h2>    
            //     </div>
            //     <div className="item">
            //     <h2 className="ui header">
            //         <div className="App-link">
            //             <Link to="/login" style={{color: "black"}}>LogIn</Link>
            //         </div>
            //     </h2>    
            //     </div>
            // </div>
        //    <div>
        //        <ul>
        //         <li><a className="active" href="#home">Home <FaHome /></a></li>
        //         <li><a href="#news">News</a></li>
        //         <li><a href="#contact">Contact</a></li>
        //         <li><a href="#about">About</a></li>
        //        </ul>
        //    </div>
        <div className="div-bar">
        <div className="logo-tmp">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={<FaHandshake />}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            <FaHandshake />
            {'Yoon'}
            </Navbar.Brand>
            <div className="div-reglog">
            {/* <Form inline> */}
            {localStorage.token ? <DropdownButton id="dropdown-basic-button" title="Log Out / Home">
                <Dropdown.Item onClick={this.logOut}> <Navbar.Brand>  Log Out </Navbar.Brand> </Dropdown.Item>
                <Dropdown.Item > <Navbar.Brand>  <Link to="/">Home</Link> </Navbar.Brand> </Dropdown.Item>
            </DropdownButton> : <DropdownButton id="dropdown-basic-button" title="Register / Log In">
                <Dropdown.Item > <Navbar.Brand>  <Link to="/login">Log In</Link> </Navbar.Brand> </Dropdown.Item>
                <Dropdown.Item > <Navbar.Brand>  <Link to="/signup">Register </Link> </Navbar.Brand> </Dropdown.Item>
            </DropdownButton>}
            {/* </Form> */}
            </div>
        </div>
        <nav className="navbar">
            {/* <Navbar.Brand href="#home">
            <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {'A Super Cool Name'}
            </Navbar.Brand> */}
            <Nav className="mr-auto">
                <Navbar.Brand>  <Link to="/"><font color="blue"></font><FaHome /> Home </Link></Navbar.Brand>
                {/* <Navbar.Brand>  <Link to="/signup">SignUp </Link> </Navbar.Brand>
                <Navbar.Brand>  <Link to="/login">LogIn </Link> </Navbar.Brand> */}
                <Navbar.Brand>  <Link to="/entrepreneurs">Entrepreneurs </Link> </Navbar.Brand>
                <Form inline>
                <FormControl type="text" name="query" value={this.state.query} onChange={this.handleQuery} placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info" onClick={this.handleResult} >Search</Button>
            </Form>
            </Nav>
            <Form inline>
            {/* <DropdownButton id="dropdown-basic-button" title="Register/Log In">
                <Dropdown.Item > <Navbar.Brand>  <Link to="/login">LogIn</Link> </Navbar.Brand> </Dropdown.Item>
                <Dropdown.Item > <Navbar.Brand>  <Link to="/signup">SignUp</Link> </Navbar.Brand> </Dropdown.Item>
            </DropdownButton> */}
                <Button variant="outline-info" onClick={this.directToDonate}>Donate</Button>
            </Form>
        </nav>
        {/* <Mission /> */}
        </div>
        )
    }
}

export default withRouter(NavBar)
