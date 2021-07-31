import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export const SMURF_FETCH_START = 'SMURF_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FETCH_FAILURE = 'SMURF_FAILURE';
export const SMURF_ADD = 'SMURF_ADD';
export const ERROR_MESSAGE = 'ERROR_MESSAGE'


export const fetchSmurfs = () => {

    return dispatch => {
        
        dispatch(fetchSmurfsLoading)

        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('Axios Error:', err)
            })

            // axios.get('http://localhost:3333/smurfs')
            // .then(res => console.log(res))
            // .catch(err => console.log('Axios Error', err));

    }
}

export const fetchSmurfsLoading = () => {
    return ({type: SMURF_FETCH_START})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.