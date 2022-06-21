const axios = require('axios').default;
const url = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token';


const response = axios.post(url, {
    "client_id": 'madonna',
    "client_secret": 'mad0nna',
    "audience": 'https://escalab.academy',
    "grant_type": 'client_credentials'
}).then(response => {
    console.log(response.data);
    return response.data;
}).catch(error => {
    console.log(error);
});

const axi = require('axios').default;

const res = axi.post(url, {
    "client_id": 'dualipa',
    "client_secret": 'du4321',
    "audience": 'https://escalab.academy',
    "grant_type": 'client_credentials'
}).then(res => {
    console.log("token_type:" + res.data.token_type + " " + 'access_token:' + res.data.access_token);
    return res.data;
}).catch(error => {
    console.log(error);
});