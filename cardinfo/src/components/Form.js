// TODO: Create Form Component for mobile design

import React from 'react'
import '../form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardForm = () => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current.focus();
      };

    return (
    <div>
    <Form className="form-container">
        <Row>
    <Form.Group className="mb-3" controlId="CardholderName">
        <Form.Label>Cardholder Name</Form.Label>
        <Form.Control className="mb-3" onClick={handleClick} ref={ref} type="text" placeholder="e.g Jane Appleseed" />
        </Form.Group>
        </Row>

        <Row>

        <Form.Group className="mb-3" controlId="CardholderNumber">
        <Form.Label>Cardholder Number</Form.Label>
        <Form.Control type="text" placeholder="e.g 1234 4562 2332 0000" />
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col} xs={3} className="mb-3" controlId="month">
            
        <Form.Label>Exp. Date</Form.Label>
        <Form.Control type="text" placeholder="MM" />

        </Form.Group>

        <Form.Group as={Col} xs={3} className="mb-3" controlId="year">
        <Form.Label style={{color:"white", fontStretch: "expanded"}}> Exp. Date </Form.Label>

        <Form.Control type="text" placeholder="YY" />
        </Form.Group>

        <Form.Group as={Col} xs={3} className="mb-3" controlId="cvc">
        <Form.Label>CVC</Form.Label>
        <Form.Control type="text" placeholder="e.g 132" />
        </Form.Group>
        
        </Row>


        <Button style={{backgroundColor:"hsl(278, 68%, 11%)", padding:".8em",}} as={Col} xs={12}variant="primary" type="submit">
        Confirm
        </Button>
    </Form>

    </div>
    )
}

export default CardForm