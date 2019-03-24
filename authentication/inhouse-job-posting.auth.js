const axios = require("axios");

function auth_user_recruiter(req) {

    const options = {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'authorization': req.headers.authorization
        },
        url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };

    return axios(options);
}

function auth_user_applicant(req) {

    const options = {
      method: "get",
      headers:{
        'Content-Type': 'application/json',
        'authorization': req.headers.authorization
    },
      url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };
    
    return axios(options);
}

module.exports = {auth_user_recruiter, auth_user_applicant}