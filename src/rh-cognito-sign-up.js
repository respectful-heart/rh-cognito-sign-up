const AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';

exports.handler = (event, context, callback) => {
    const params = {
        ClientId : process.env.CLIENT_ID,
        Password: event.password,
        Username: event.username,
        UserAttributes: [{
            Name: 'email', /* required */
            Value: event.username
        }, {
            Name: 'phone_number',
            Value: event.phone
        }]
    };
    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
    cognitoIdentityServiceProvider.signUp(params, callback)
};
