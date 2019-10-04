import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Donate extends React.Component {
    state = {
        submitted: false
    }
    ifDonated = () => {
        this.setState({submitted: !this.state.submitted})
    }
    render() {
        return(
            this.state.submitted ?
            <div className="div-short-msg">Thank you so much! We are eternally grateful.</div> :
            <div className="div-donate">
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Group controlId="formGridAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control placeholder="Amount" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>State</Form.Label>
                <Form.Control />
                </Form.Group>

                {/* <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
                <Form.Control />
                </Form.Group> */}

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.ifDonated}>
                Submit
            </Button>
        </Form>

    </div>
        )
        
    }
    
}

export default withRouter(Donate)