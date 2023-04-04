import './sign-up.css';
import { useState } from 'react';
import MDInput from 'components/MDInput';
import { Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import MDButton from 'components/MDButton';
import { handleError } from 'utils/handler';
import { useNavigate } from 'react-router-dom';
import { postRegistration } from '../authSlice';
import MDTypography from 'components/MDTypography';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleInput = (e) => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterValidation = () => {
        let fields = authData;
        let errors = {};
        let formIsValid = true;

        if (!fields['name']) {
            formIsValid = false;
            errors['name'] = 'Cannot be empty';
        }

        if (!new RegExp(/^[A-Za-z0-9]{3,}$/).test(fields["name"])) {
            formIsValid = false;
            errors['name'] = 'Name is not valid';
        }

        //Email
        if (!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Cannot be empty';
        }

        if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(fields["email"])) {
            formIsValid = false;
            errors['email'] = 'Email is not valid';
        }

        if (!fields['username']) {
            formIsValid = false;
            errors['username'] = 'Cannot be empty';
        }

        if (!new RegExp(/^[A-Za-z0-9]{3,}$/).test(fields["username"])) {
            formIsValid = false;
            errors['username'] = 'Username is not valid';
        }

        if (!fields['password']) {
            formIsValid = false;
            errors['password'] = 'Cannot be empty';
        }

        if (!new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).test(fields["password"])) {
            formIsValid = false;
            errors['password'] = 'Password is not valid';
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleRegister = () => {
        if (!handleRegisterValidation()) {
            toast.error('Form gives some error, please try again');
            return;
        }
        dispatch(postRegistration(authData))
            .then(res => {
                if (res?.payload) {
                    const { payload: { data = null, msg } = {} } = res;
                    if (!data) toast.error(msg);
                    else {
                        toast.success('Signup successful');
                        navigate('/login', { state: data });
                    }
                }
            })
            .catch(err => {
                if (err?.message) {
                    toast.error(err.message);
                } else {
                    toast.error('Something is wrong, please try again');
                }
            });
    };

    return (
        <>
            <ToastContainer />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box className='login-bg' sx={{ width: 1 }}></Box>
                </Grid>
                <Grid item xs={12} md={6} className='Login-Credentials'>
                    <Box onClick={handleLogoClick} className='logo' sx={{ cursor: 'pointer' }}></Box>
                    <div className='login-details'>
                        <div>
                            <MDTypography variant='h4' gutterBottom component='div' sx={{ mb: 3, textAlign: 'left', fontWeight: '500' }} text='Join Us' />
                            <MDInput
                                name='name'
                                label='Name'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.name}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.name)}
                                helperText={errors?.name}
                            />
                            <MDInput
                                name='email'
                                label='Email'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.email}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.email)}
                                helperText={errors?.email}
                            />
                            <MDInput
                                name='username'
                                label='Username'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.username}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.username)}
                                helperText={errors?.username}
                            />
                            <MDInput
                                name='password'
                                label='Password'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.password}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.password)}
                                helperText={errors?.password}
                            />
                            <MDButton variant='contained' type='submit' sx={{ mt: 3, width: 1, backgroundColor: '#3E54AC', "&:hover": { backgroundColor: "#3E54AC" } }} size='large' text='SignUp' onClick={handleRegister} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};

export default SignUp;