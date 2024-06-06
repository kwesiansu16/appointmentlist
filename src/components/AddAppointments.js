import React from 'react'
import { Card ,Col,Form,Row,Button} from 'react-bootstrap';
import { useState } from 'react';


function AddAppointments() {
    let [toggleForm,setToggleForm] = useState(false);
  return (
    <>
    <Col md="8">
        <Card className="mb-3">
            <Card.Header>
                Add Appointment
                <Button size="sm" className='small float-end' onClick={()=>{setToggleForm(!toggleForm)}}>+</Button>
            </Card.Header>
{ toggleForm &&
    <Card.Body>
    <Form>
        <Row className='mb-3'>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder='First name'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder='Last name'/>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
                <Form.Label>Appointment Time</Form.Label>
                <Form.Control type="time"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea"/>
            </Form.Group>
            <Button variant="primary">Submit</Button>
        </Row>
    </Form>
</Card.Body>
}
        </Card>
    </Col>
    </>
  )
}

export default AddAppointments;
