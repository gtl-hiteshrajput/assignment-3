const BASIC_URL = 'http://localhost:5000/';

const apiEndpoints = {
    GetUsers: `${BASIC_URL}users`,
    GetLogin: `${BASIC_URL}users/login`,
    PostRegister: `${BASIC_URL}users`,
    GetFweets: `${BASIC_URL}fweets`,
    GetFweetById: `${BASIC_URL}fweets`,
    AddFweet: `${BASIC_URL}fweets`,
    GetUserById: `${BASIC_URL}users`
};

export default apiEndpoints;