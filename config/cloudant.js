const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { BasicAuthenticator } = require('ibm-cloud-sdk-core');

const authenticator = new IamAuthenticator({
    apikey: '<varname>WZFUgxI3YolgMq4xwVQd6mHXuHWaOnoYEPSchyloEmMo</varname>'
});

const service = new CloudantV1({
    authenticator: authenticator
});

service.setServiceUrl('https://9166a3e8-70e9-4b7b-afc4-b35699e06fe0-bluemix.cloudantnosqldb.appdomain.cloud');

service.getAllDbs().then(response => {
  console.log(response.result);
});

