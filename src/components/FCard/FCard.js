import moment from 'moment';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material/index';

const FCard = ({ fweet: { content, createdAt, id: fweetId, user = {} } = {} }) => {
    const navigate = useNavigate();
    const { name: userName, id: userId } = user;

    const handleProfileInfo = (id) => {
        navigate(`/profile/${id}`);
    };

    const handleFweetInfo = (fweetId) => {
        navigate(`/fweet/${fweetId}`);
    };

    return (
        <Card sx={{ maxWidth: 800, marginTop: '10px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        {userName ? Array.from(userName)[0] : ''}
                    </Avatar>
                }
                onClick={() => handleProfileInfo(userId)}
                title={userName}
                style={{ cursor: 'pointer' }}
                subheader={moment(createdAt).fromNow()}
            />
            {/* Commented for image display
                <CardMedia
                component="img"
                height="194"
                image="https://picsum.photos/seed/picsum/200/300"
                alt="Paella dish"
            />*/}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ThumbUpOffAltIcon />
                </IconButton>
                <IconButton onClick={() => handleFweetInfo(fweetId)} aria-label="share">
                    <VisibilityIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default FCard;