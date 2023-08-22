const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'YOUR API KEY'
};

const data = {
  name: 'My Destination',
  to_url: 'https://6ca8-2409-4064-4dcb-a100-9d1e-497c-e949-987e.ngrok-free.app /webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));