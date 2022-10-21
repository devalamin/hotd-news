import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false);

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                handleUserProfile(name, photo);

            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);

    }
    const handleUserProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))

    }



    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo Url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleChecked}
                        type="checkbox" label={<>Accept <Link to='/terms'>Terms And Conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!checked}>
                    Register
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>

            </Form>
        </div>
    );
};

export default Register;