import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../img/google.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import signUp from '../../../Assets/form-illustrator/Sign up-pana.svg'
import './Register.css'


const Register = () => {
    const [validated, setValidated] = useState(false);
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [updateProfile, updateError] = useUpdateProfile(auth);



    let errorELement;
    if (error || error1 || updateError) {
        errorELement = (
            <div>
                <p>Error: {error?.message}{error1?.message}</p>
            </div>
        );
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    if (loading || loading1) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }

    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        <div className='regContainer form-container registration'>
            <div className='w-75 col-lg-4 col-md-10 col-sm-12 col-12 p-5 m-5' form-img>
                <img style={{ height: "100%", width: "100%", borderRadius:"5%" }} src={signUp} alt="" />
            </div>
            <div className='w-100 me-2 col-lg-6 col-md-10 col-sm-12 col-12  p-5 mx-auto m-5 rounded-3'>
                <h1 className='registerTitle'>Register</h1>
                <Form noValidate validated={validated} onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h6 className='text-start'>Your Name</h6>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h6 className='text-start'>Email address</h6>
                        <Form.Control className=' text-lowercase' ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <h6 className='text-start'>Password</h6>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100 registerBtn' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                {errorELement}
                <div className='m-4'>
                    <p className='text-center mt-2'>Already have an account? <span onClick={navigateLogin} className='text-primary'>Please login</span></p>
                </div>
                <div className='input-wrapper'>
                    <button onClick={() => signInWithGoogle()} className='google-auth'>
                        <img src={GoogleLogo} alt='' />
                        <p className='mt-3'> Continue with Google </p>
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;