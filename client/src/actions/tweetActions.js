import {
GET_TWEETS
} from './types.js'
import axios from 'axios';

export const getTweets = () => dispatch=> {
    axios
    .get(`/api/tweets?tweetskeyword=${keyword}&time_start=${timeStart}&time_end=${timeEnd}&negative=${negative}&number_of_tweets=${noOfTweets}`)
    .then(res =>
      dispatch({
        type: GET_TWEETS,
        payload: res.data
      })
    )
    .catch(err => {
      console.error(err);
    });

}