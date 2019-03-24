const axios = require("axios");

methods.auth_user_recruiter = function(req) {
    if (!req.headers.Authorization) return false;

    const options = {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + req.headers.Authorization
        },
        url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };

    return axios(options);
};

methods.auth_user_applicant = function(req) {
    const options = {
      method: "get",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + req.headers.Authorization
    },
      url: "https://jobhub-authentication-staging.herokuapp.com/users/self"
    };
    return axios(options);
};

module.exports = methods;