import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'secret-key': '$2b$10$eST7pCHzgmfC3.IEH.rnluPcF0Y..d.0UWqhJREvK1vcAWUtXk3ji'
};

const getProduct = async () => (
  (await axios.get(
    'https://api.jsonbin.io/b/5eef7171e2ce6e3b2c76ce2e', { headers: headers }
  )).data
);

export {
  getProduct
};