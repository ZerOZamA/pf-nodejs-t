const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');


const authenticator = new IamAuthenticator({
    apikey: process.env['apikey']
});

const service = new CloudantV1({
    authenticator: authenticator
});

service.setServiceUrl('https://9166a3e8-70e9-4b7b-afc4-b35699e06fe0-bluemix.cloudantnosqldb.appdomain.cloud');


module.exports = service;