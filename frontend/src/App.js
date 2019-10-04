import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Error from './Error'
import Mission from './Mission'
import { saveAs } from 'file-saver';
import Showcase from './Showcase'


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AgreementContainer from './AgreementContainer';
import Contact from './Contact';
import Footer from './Footer'
import Home from './Home'
import FillForm from './FillForm'
import LoanForm from './LoanForm';
import EntrepreneursContainer from './EntrepreneursContainer';
import Donate from './Donate'
import Newsletter from './Newsletter';

class App extends React.Component {
  state = {
    // entrepreneurs: entrepreneurs
    user: {},
    activeUser: null,
    activeEntrepreneur: null,
    entrepreneurs: [],
    isLoaded: false,
    displayEntrepreneurs: []
  }
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/logged_in")
  //   .then(r => r.json())
  //   .then(info => {
  //     info.logged_in ? this.setState({user: info.user}) : this.setState({user: {}})
  //   })
  // }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/entrepreneurs")
    .then(r => r.json())
    .then(data => {
      this.setState({
        entrepreneurs: data, 
        isLoaded: true,
        // displayEntrepreneurs: data
      })
    })
  }
  updateAmount = (entrepreneur_id, loanAmount) => {
    this.setState({
      entrepreneurs: this.state.entrepreneurs.map((e)=>{
        if(e.id === entrepreneur_id){
          e.amount = e.amount - loanAmount
        }
        return e
      })
    })
  }
  handleSignUp = (data) => {
    this.setState({activeUser: data})
  }
  handleLogIn = (data) => {
    this.setState({user: data.user})
  }
  handleLogOut = () => {
    this.setState({user: {}})
  }
  filterEntrep = (e) => {
    // debugger
    console.log(this.state.displayEntrepreneurs)
    if (e === "All") {
      this.setState({
        displayEntrepreneurs: this.state.entrepreneurs
      }, ()=>{
        console.log("HERE BE ENTREPRENEURS:",this.state.edisplayEntrepreneurs)
        //more code here
        
      })
    }
    else {
      this.setState({
        displayEntrepreneurs: this.state.entrepreneurs.filter(a => a.continent == e)
      }, ()=>{
        console.log("HERE BE ENTREPRENEURS:",this.state.displayEntrepreneurs)
        //code here
      })
    }
  }

  setActiveEntrepreneur = (entrepreneur) => {
    this.setState({activeEntrepreneur: entrepreneur})
  }
  // sortAlphaName = (e) => {
  //   this.setState({
  //     displayEntrepreneurs: this.state.entrepreneurs.sort((a,b) => a.name > b.name ? 1 : -1)
  //   })
  // }
  // handleAuth = (data) => {
  //   this.handleLogIn(data)
  // }
  handleLogOutClick = () => {}
  // FileSaver.saveAs(https: //httpbin.org/image): image.jpg
  render() {
  // console.log(this.state.entrepreneurs)
    return (
      <BrowserRouter>
        <div>
          <NavBar entrepreneurs={this.state.entrepreneurs}/>
          <Switch>
            <Route exact path="/" render={() => <Home entrepreneurs={this.state.entrepreneurs}/>} />
            <Route path="/signup" render={() => <SignUp handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>}/>
            <Route path="/login" component={LogIn} />
            <Route path="/entrepreneurs" render={() => <EntrepreneursContainer entrepreneurs={this.state.entrepreneurs} filterEntrep={this.filterEntrep} setActiveEntrepreneur={this.setActiveEntrepreneur}/>} />
            {/* <Route path="/entrepreneurs/:id/fillform" render={() => <FillForm loan={this.state.entrepreneurs} agreeLoan={this.agreeLoan}/>} />  */}
            <Route path="/fillform" render={() => <FillForm updateAmount={this.updateAmount} activeEntrepreneur={this.state.activeEntrepreneur} agreeLoan={this.agreeLoan}/>} /> 
            <Route path="/donate" component={Donate} />
            <Route path="/newsletter" component={Newsletter} />
            <Route path="*" component={Error} />
          </Switch>
          {/* <Route component={Mission} /> */}
          {/* <Route render={() => <AgreementContainer entrepreneurs={this.state.entrepreneurs}/>} />
          <Route component={Contact} /> */}
          <Route component={Footer} />
          {/* <Route component={FillForm}/> */}
        </div>
      </BrowserRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }

}

export default App;
