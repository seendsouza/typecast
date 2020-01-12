import {
GET_DASHBOARD
} from './types.js'
import axios from 'axios';

export const getDashboard = () => dispatch=> {
  const keyword="askrbc";
  const timeStart=Date.now()-10000;
  const timeEnd=Date.now()
  const negative=false;
  const noOfTweets=20;
    axios
    .get(`/api/dashboard?keyword=${keyword}&time_start=${timeStart}&time_end=${timeEnd}&negative=${negative}&number_of_tweets=${noOfTweets}`)
    .then(res =>
      dispatch({
        type: GET_DASHBOARD,
        payload: res.data
      })
    )
    .catch(err => {
      console.error(err);
    });

}