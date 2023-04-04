import { TextField } from "@mui/material";

const MDInput = ({ onChange, value, sx, label, name, helperText, error }) => {
    return (
        <>
            <TextField
                id="outlined-multiline-flexible"
                name={name}
                label={label}
                multiline
                variant='outlined'
                sx={sx}
                value={value}
                onChange={onChange}
                error={error}
                helperText={helperText}
            />
        </>
    )
};

export default MDInput;