import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const SMURF_ADD = 'SMURF_ADD'
export const SMURF_DELETE = 'SMURF_DELETE'
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurf = () => dispatch =>{
  dispatch({type: FETCH_SMURF_START});
  axios
    .get("http://localhost:3333/smurfs")
    .then(results => dispatch({type: FETCH_SMURF_SUCCESS, payload: results.data}))
    .catch(error => dispatch({type: FETCH_SMURF_FAILURE, payload: error}))
};
export const addSmurf = (index) => dispatch =>{
  dispatch({type: SMURF_ADD})
  axios
  .post('http://localhost:3333/smurfs'  , index)
  .then (response => { dispatch({type:  FETCH_SMURF_SUCCESS, payload : response.data  });  return  true  })
  .catch ( error=> { dispatch( { type: FETCH_SMURF_FAILURE, payload : error}); return false })
}
export const deleteSmurf = (smurf) => (dispatch) =>{
  dispatch  ({type: SMURF_DELETE})
  axios
        .delete(`http://localhost:3333/smurfs/${smurf}`)
        .then(response => { dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data}) ; return true  })
        .catch( error => { dispatch({ type:FETCH_SMURF_FAILURE,payload : error}); return false })
}      