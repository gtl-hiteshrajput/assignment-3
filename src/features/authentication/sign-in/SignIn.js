import { useState } from 'react';
import './sign-in.css';
import MDInput from 'components/MDInput';
import { Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../authSlice';
import MDButton from 'components/MDButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { localStorageKey } from 'constants/index';
import MDTypography from 'components/MDTypography';
import { ToastContainer, toast } from 'react-toastify';
import { handleError, setLocalStorageData } from 'utils/handler';

const { userData } = localStorageKey;

const SignIn = () => {
    const { state = {} } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({
        email: state?.email || '',
        password: state?.password || ''
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

    const handleLoginValidation = () => {
        let fields = authData;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Cannot be empty';
        }

        if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(fields["email"])) {
            formIsValid = false;
            errors['email'] = 'Email is not valid';
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

    const handleLogin = () => {
        if (!handleLoginValidation()) {
            toast.error('Form gives some error, please try again');
            return;
        }
        dispatch(fetchLogin(authData))
            .then(res => {
                if (res?.payload) {
                    const { payload: { data = null, msg } = {} } = res;
                    if (!data) toast.error(msg);
                    else {
                        toast.success('Login successful');
                        setLocalStorageData(userData, data);
                        navigate('/dashboard');
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
                            <MDTypography variant='h4' gutterBottom component='div' sx={{ mb: 3, textAlign: 'left', fontWeight: '500' }} text='Login' />
                            <MDInput
                                name='email'
                                label='email'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.email}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.email)}
                                helperText={errors?.email}
                            />
                            <MDInput
                                name='password'
                                label='password'
                                variant='outlined'
                                sx={{ mb: 3, width: 1 }}
                                value={authData.password}
                                onChange={(e) => handleInput(e)}
                                error={handleError(errors?.password)}
                                helperText={errors?.password}
                            />
                            <MDButton
                                variant='text'
                                color='inherit'
                                sx={{ display: 'block', ml: 'auto', textTransform: 'capitalize' }}
                                onClick={() => { }} text='Forgot password' />
                            <MDButton variant='contained' type='submit' sx={{ mt: 3, width: 1, backgroundColor: '#3E54AC', "&:hover": { backgroundColor: "#3E54AC" } }} size='large' text='Login' onClick={handleLogin} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};

export default SignIn;