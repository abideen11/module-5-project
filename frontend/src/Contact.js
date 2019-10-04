import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

// ctct-container
// ctct-row
// ctct-col

// fst-ctct-text
// ctct-lbl

// ctct-col-tu
// info-lbl

class Contact extends React.Component {
    directToNewsletter = () => {
        this.props.history.push('/newsletter')
    }
    render() {
        return(
            <div className="ctct-container">
                <div className="w3-row">
                    <div className="w3-col m5">
                        <div className="fst-ctct-text"><span className="ctct-lbl">Contact Us</span></div>
                        {/* <h3>Address</h3> */}
                        <br />
                        <p><FaMapMarkerAlt /> Houston, TX</p>
                        <p><FaPhone /> 999-999-9999</p>
                        <p><FaEnvelope /> yoon.com</p>
                    </div>
                    <div className="ctct-col-tu">
                        <p>Subscribe to our newsletter</p>
                        <form className="info-frm" action="/action_page.php">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.directToNewsletter}>
                                Submit
                            </Button>
                        </Form>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default withRouter(Contact)