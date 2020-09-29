import axios from 'axios';

const weatherFetcher = location => {
  location = location.split(' ').join('%20')
  return axios(`https://weather-endpoint.herokuapp.com/${location}`)
  .then((resp) => {
    return resp.data;
  })
  .catch((error) => console.log(error))
}

export default weatherFetcher;