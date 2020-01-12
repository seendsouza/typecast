import {
GET_DASHBOARD
} from './types.js'
import axios from 'axios';

export const getDashboard = () => dispatch=> {
    axios
    .get(`/api/dashboard`)
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