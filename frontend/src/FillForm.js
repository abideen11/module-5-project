import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import LoanForm from './LoanForm'

class FillForm extends React.Component {
    constructor() {
        super()

        this.state = {
            filledOut: false,
            amount: "",
            duration: "",
            enable: false
        }
    }
    updateAmount = () => {
        fetch("http://localhost:3000/api/v1/agreements", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}` 
            }, 
            body: JSON.stringify({
                amount: parseInt(this.state.amount),
                entrepreneur_id: this.props.activeEntrepreneur.id
            })
        })
        .then(r => r.json())
        .then(agreement => {
            // getAgreement => {
            // updateAmount = this.updateObject(getAgreement)
            this.props.updateAmount(agreement.entrepreneur_id, agreement.amount)
        })
    } 
    // redirectToEntrepreneurs = () => {
    //     this.props.history.push('/entrepreneurs')
    // }
    handleChangeAmount = (e) => {
        console.log("the e.target.value = ", e.target.value)
        // debugger
        console.log(typeof test)
        this.setState({
            amount: e.target.value,
            
        })
    }
    handleChangeDuration = (e) => {
        console.log(e.target.value)
        this.setState({
            duration: e.target.value
        })
    }
    toggleEnable = (e) => {
        this.setState({
            enable: e.target.value <= this.props.activeEntrepreneur.amount ? true : false
        })
    }
    handleForm = () => {
        this.setState({filledOut: !this.state.filledOut})
    }

    handleRefresh = () => {
        if(this.props.activeEntrepreneur){

            console.log(this.props.activeEntrepreneur)
        
            return(
                this.state.filledOut ? <div><p>Thank you for your for loan, we are grateful for your act of empowerment.</p>
                {/* <button onClick={this.redirectToEntrepreneurs}>See Entrepreneurs</button> */}
                </div> :
                <div className="div-fil">
                    <h1>{this.props.activeEntrepreneur.name}</h1>
                    <p>{this.props.activeEntrepreneur.country}</p>
                    <p>{this.props.activeEntrepreneur.continent}</p>
                    <p>{this.props.activeEntrepreneur.reason}</p>
                    <p>{this.props.activeEntrepreneur.amount}</p>
                    <form>
                        
                        <label>
                            Amount
                            {" "}<input type="integer" name="amount" value={this.state.amount} onChange={e => {this.handleChangeAmount(e); this.toggleEnable(e)} } ></input>
                        </label>
                        <br />
                        <label>
                            Duration of loan (Year(s))
                            {" "}<select type="integer" name="duration" value={this.state.duration} onChange={(e) => this.handleChangeDuration(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </label>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                        {this.state.enable ? 
    
                            <Button type="submit" onClick={() => {this.handleForm() ; this.updateAmount()}} >Accept</Button>
                            : <Button type="submit" disabled>Accept</Button>}
                            </Col>
                        </Form.Group>
                    </form>
                    
                    {/* <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Name
                            
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="name" name="name" value={this.state.name} placeholder="Name" />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Country
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="country" name="country" value={this.state.country} placeholder="Country" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Continent
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="continent" name="continent" value={this.state.continent} placeholder="Continent" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Amount
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="integer" name="amount" value={this.state.amount} placeholder="Amount" onChange={(e,loan) => this.props.agreeLoan(loan,e.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Reason for lending</Form.Label>
                            <Form.Control as="textarea" name="reason" value={this.state.reason} rows="3" />
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Duration of loan
                            </Form.Label>
                            <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Year(s)</Form.Label>
        <Form.Control as="select" type="integer" name="duration" value={this.state.duration} onChange={this.handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" onClick={this.handleForm}>Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form> */}
                </div>
            )
        }else{
            this.props.history.replace("/entrepreneurs")
            return <div/>
        }
    }
    render() {
        return (this.handleRefresh())
    }
}

export default withRouter(FillForm)