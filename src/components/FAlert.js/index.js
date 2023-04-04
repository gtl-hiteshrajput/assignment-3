import React from 'react';
import { Alert } from '@mui/material';

const FAlert = ({ variant, severity, text }) => {
    return (
        <Alert variant={variant} severity={severity}>
            {text}
        </Alert>
    )
};

export default FAlert;
