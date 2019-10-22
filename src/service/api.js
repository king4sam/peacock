import axios from 'axios';

const { REACT_APP_BOARD_LOCATION: boardLocation } = process.env;

console.log('boardLocation', boardLocation);
const apiInstance = axios.create({
  baseURL: boardLocation,
  headers: { 'Access-Control-Allow-Origin': boardLocation },
});

apiInstance.interceptors.request.use(
  config => {
    console.log(`sending request to ${config.baseURL}${config.url}`);
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

const active = async () => {
  try {
    await apiInstance.get('/active');
    await apiInstance.get('/disactive');
  } catch (error) {
    console.log(error);
  }
};

const inactive = async () => {
  try {
    await apiInstance.get('/active');
    await apiInstance.get('/disactive');
  } catch (error) {
    console.log(error);
  }
};

export default {
  active,
  inactive,
};
