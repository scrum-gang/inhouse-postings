const axios = require("axios");

export function auth_user_recruiter(req) {
    if (!req.header.Authorization) return false;

    const options = {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + req.header.Authorization
        },
        url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };

    return axios(options);
}

export function auth_user_applicant(req) {
    const options = {
      method: "get",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + req.header.Authorization
    },
      url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };
    return axios(options);
}