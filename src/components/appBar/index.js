import React, { useState } from 'react';
import classes from "./appBar.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from 'react-router-dom';
import Drawer from "./drawer";

function AppBar() {

    const [state, setState] = useState({ isOpen: false });

    const toggleDrawer = (status) => {
        console.log(state);
        setState({ ...state, isOpen: status === true ? !state.isOpen : false });
    };

    let nav = (<Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link to="/" >Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <NavDropdown
            title="Dropdown"
        // id={`offcanvasNavbarDropdown-expand-${expand}`}
        >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>
        </NavDropdown>
    </Nav>);
    let search = (<Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
    </Form>);

    return (
        <>

            <div className={classes.appBar}>
                <div className={classes.menubtn} onClick={() => toggleDrawer(true)}>
                    &#9776;
                </div>
                <div>
                    {/* <a href="#">Logo</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a> */}
                </div>
            </div>
            <Drawer isOpen={state.isOpen} closeDrawer={() => toggleDrawer(false)} />
        </>
    );
}
export default AppBar;