import TextareaAutosize from '@mui/base/TextareaAutosize';

const FTextArea = ({ maxRows, placeholder, style, onChange }) => {
    return (
        <>
            <TextareaAutosize
                aria-label="maximum height"
                minRows={maxRows}
                placeholder={placeholder}
                style={style}
                onChange={onChange}
            />
        </>
    )
};

export default FTextArea;