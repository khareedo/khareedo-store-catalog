import { React, useState } from 'react';
// import { Tailwind } from '@tailwind/react';
import { Navbar, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <Tailwind>
      <Navbar
 
bg="light"
 
expand="lg">

        
<Navbar.Brand
 
href="#">My App</Navbar.Brand>

        
<Navbar.Toggle
 
aria-controls="basic-navbar-nav" />

        
<Navbar.Collapse
 
id="basic-navbar-nav">

          
<Nav
 
className="mr-auto">

            
<Nav.Link
 
href="#">Home</Nav.Link>

            
<Nav.Link
 
href="#">About</Nav.Link>

          
</Nav>

          <InputGroup className="w-full">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            
<InputGroup.Append>

              
<Button
 
variant="outline-secondary"
 
onClick={handleSearchSubmit}>
                Search
              </Button>

            
</InputGroup.Append>

          
</InputGroup>
        </Navbar.Collapse>
      </Navbar>
    </Tailwind>
  );
};

export default SearchBar;