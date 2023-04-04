import { useState } from 'react';
import './add.css';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import MDButton from 'components/MDButton';
import { useNavigate } from 'react-router-dom';
import FAlert from 'components/FAlert.js/index';
import MDTypography from 'components/MDTypography';
import FTextArea from 'components/FTextArea/index';
import { getLocalStorageData } from 'utils/handler';
import { ToastContainer, toast } from 'react-toastify';
import { localStorageKey, mAlertSeverity } from 'constants/index';
import { addFweetThunk, getTweetsThunk } from 'features/dashboard/fweetSlice';

const { userData } = localStorageKey;
const { error: serverityErrKey } = mAlertSeverity;

const Add = ({ isDashboard = false }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fweet, setFweet] = useState('');
    const [error, setError] = useState(null);
    // const resStatus = useSelector(state => state.fweet.addFweetStatus);
    // const [Loader, setLoader] = useState(null);

    // useEffect(() => {
    //     if (resStatus) {
    //         setLoader(setLoaderComponent(resStatus));
    //     }
    // }, [resStatus]);

    const handleInput = (e) => {
        setFweet(e.target.value);
        setError(null);
    };

    const handleFweetValidation = () => {
        let error = null;
        let formIsValid = true;

        if (!fweet) {
            formIsValid = false;
            error = 'Cannot be empty';
        }

        setError(error);
        return formIsValid;
    }

    const handleSubmit = () => {
        if (!handleFweetValidation()) {
            toast.error('Form gives some error, please try again');
            return;
        }
        const { id = null } = getLocalStorageData(userData) || {};
        const request = { content: fweet, user: id };
        dispatch(addFweetThunk(request))
            .then(res => {
                if (res?.payload) {
                    const { payload: { data = null, msg } = {} } = res;
                    if (!data) toast.error(msg);
                    else {
                        toast.success('Tweet submitted successfully');
                        if (!isDashboard) navigate('/dashboard');
                        else dispatch(getTweetsThunk());
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
            {/* {Loader !== null && Loader} */}
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} className='Add-Parent'>
                    <div className='add-details'>
                        <MDTypography variant='h6' gutterBottom component='div' sx={{ fontWeight: '500' }} text='Add Fweet' />
                        <FTextArea
                            maxRows={4}
                            placeholder='Enter fweet'
                            style={{ width: '340px' }}
                            onClick={handleInput}
                            value={fweet}
                            onChange={(e) => handleInput(e)}
                        />
                        {
                            error !== null && <FAlert variant='outlined' severity={serverityErrKey} text={error} />
                        }
                        <MDButton
                            variant='contained'
                            type='submit'
                            sx={{ ml: 3, backgroundColor: '#3E54AC', "&:hover": { backgroundColor: "#3E54AC" } }}
                            size='large'
                            text='Submit'
                            onClick={handleSubmit} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
};

export default Add;