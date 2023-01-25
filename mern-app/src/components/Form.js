import React from 'react';
import { Button, InputGroup, Form} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserForm = () => {
  return (
    <>
    <Form>
        <InputGroup className="mb-3">
        <InputGroup.Text>First Name</InputGroup.Text>
        <Form.Control aria-labelledby="firstName" />
        {/* <Form.Control.Feedback type="invalid">
          Please enter first name
        </Form.Control.Feedback> */}
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text>Last Name</InputGroup.Text>
        <Form.Control aria-labelledby="lastName" />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text>Email</InputGroup.Text>
        <Form.Control type="email" aria-labelledby="email" placeholder="email@email.com"/>
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text>Profile Image</InputGroup.Text>
        <Form.Control type="file" aria-labelledby="profileImage" />
        </InputGroup>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>    
    </>
  )
}
