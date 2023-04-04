import { Button } from "@mui/material";

const MDButton = ({ text, onClick, sx, color = null, variant = null, size = null }) => {
    return (
        <Button
            variant={`${variant ? variant : 'contained'}`}
            onClick={(e) => onClick(e)}
            color={`${color ? color : 'success'}`}
            size={`${size ? size : 'medium'}`}
            sx={sx}>
            {text}
        </Button>
    )
};

export default MDButton;