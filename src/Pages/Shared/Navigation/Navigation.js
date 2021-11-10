import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const { user, handleSignOut } = useAuth();


    return (
        <>
            <Navbar className="navigation border border-bottom " expand="lg" style={{ fontFamily: 'roboto' }}>
                <Container fluid className="my-2">
                    <NavLink to="/home">Bikers World</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/explore">Explore</NavLink>
                            <NavLink to="/purchase">Purchase</NavLink>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                            {user.displayName &&
                                <NavLink
                                    className="text-dark"
                                    to="#" disabled
                                ><span>{user.displayName}</span></NavLink>
                            }
                            {user.email ?
                                <Button onClick={handleSignOut} variant="outline-danger">Log Out</Button>
                                :
                                <NavLink to="/login">Login</NavLink>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;