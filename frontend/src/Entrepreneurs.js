import React from 'react'
import { Card, Button } from 'react-bootstrap'
import LoanForm from './LoanForm'
import { withRouter } from 'react-router-dom'
import FillForm from './FillForm'

class Entrepreneurs extends React.Component {
    state = {
        loan: false 
    }
    handleLoan = () => {
        this.setState({loan: !this.state.loan})
    }
    redirectToLoanForm = () => {
        if(localStorage.token){
            this.props.setActiveEntrepreneur(this.props.entrepreneur)
            this.props.history.push(`/fillform`)
        } else {
            this.props.history.push('/login')
        }
    }
    render() {
        console.log(this.props.entrepreneur)
        return(
            // this.props.entrepreneur.amount === 0 ? null :
            <div className="div-entrp-contain">
                <div className="div-card">
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{this.props.entrepreneur.name}</Card.Title>
                            <Card.Text>{this.props.entrepreneur.country}</Card.Text>
                            <Card.Text>{this.props.entrepreneur.continent}</Card.Text>
                            <Card.Text>{this.props.entrepreneur.reason}</Card.Text>
                            <Card.Text>$ {this.props.entrepreneur.amount}</Card.Text>
                            {localStorage.token ? <Button variant="primary" onClick={this.redirectToLoanForm}>Loan</Button> : <Button variant="primary" onClick={this.redirectToLoanForm}>Log in to submit a loan</Button>}
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className="div-entrp-con-misc"></div>
                <div className="div-entrp-ren"></div>
                {this.props.entrepreneurs.map(entrepreneur => <Entrepreneur entrepreneur={entrepreneur} key={entrepreneur.id}/>)}
                <Entrepreneur entrepreneurs={this.props.entrepreneurs}/> */}
            </div>
        )
    }
}

export default withRouter(Entrepreneurs)