import moment from 'moment';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material/index';

const FCardDetail = ({ fweet: { content, createdAt, user = {} } = {} }) => {
    const navigate = useNavigate();
    const { name: userName, id: userId } = user;

    const handleProfileInfo = (id) => {
        navigate(`/profile/${id}`);
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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FCardDetail;