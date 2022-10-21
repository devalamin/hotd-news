import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftsideNav/LeftSideNav';


const Header = () => {
    const { newUser, mobile, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    console.log(newUser);
    return (
        <div className='text-center'>
            <div className='mb-4'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to='/'>HOTD News</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">
                                    {
                                        newUser?.uid ?
                                            <>
                                                <span>{newUser?.displayName}</span>
                                                <button onClick={handleSignOut}>Log Out</button>
                                            </>

                                            :
                                            <>
                                                <Link className='me-3' to='/login'>Login</Link>
                                                <Link to='/register'>Register</Link>
                                            </>

                                    }
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    {newUser?.photoURL ? <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={newUser.photoURL}
                                    ></Image>
                                        :
                                        <FaUser></FaUser>

                                    }
                                </Nav.Link>
                            </Nav>
                            <div className='d-lg-none'>
                                <LeftSideNav></LeftSideNav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;