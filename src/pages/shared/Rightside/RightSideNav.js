import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Navigate } from 'react-router-dom';
import BrandCarousel from '../../../carousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const RightSideNav = () => {

    const { providerLogIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))


    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FaGoogle className='me-2'></FaGoogle>Login with Google</Button>
                <Button variant="outline-dark mt-4"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
            </ButtonGroup>

            <div className='mt-4'>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item className='mb-2 text-success'> <FaFacebook className='me-2' />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-success'> <FaTwitter className='me-2' />Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-success'> <FaWhatsapp className='me-2' /> What's App</ListGroup.Item>
                    <ListGroup.Item className='mb-2 text-success'> <FaInstagram className='me-2' /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;