import {React,  useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
//import { Tailwind } from 'tailwindcss';
// import { Tailwind } from '@tailwind/react';
// {import('tailwindcss').Config}

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Submit the form data to the server
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800">User Registration</h1>

        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
                type="text"
                id="firstName"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                type="text"
                id="lastName"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="number"
                id="phoneNumber"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="number"
              className="form-control"
              placeholder="Enter your email address"
              name="phoneNumber"
              value={formData.email}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type="email"
                id="email"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                type="password"
                id="confirmPassword"
                aria-describedby="passwordHelpBlock"
            />
            {/* <Input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            /> */}
          </InputGroup>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
    
  );
};

export default RegistrationForm;
