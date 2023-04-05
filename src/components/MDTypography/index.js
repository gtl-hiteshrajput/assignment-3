import { Typography } from "@mui/material"

const MDTypography = ({ text, onChange, sx, variant = null, component = null }) => {
    return (
        <Typography
            variant={`${variant ? variant : 'h5'}`}
            component={`${component ? component : 'h5'}`}
            onChange={(e) => { onChange(e); }}
            sx={sx}>
            {text}
        </Typography>
    )
};

export default MDTypography;