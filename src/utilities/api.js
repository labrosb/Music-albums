import axios from 'axios';

const apiHost = process.env.REACT_APP_API_HOST;
/**
 * Basic Axios implementation to query a RESTful API
 */
export default axios.create({
  baseURL: apiHost,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
