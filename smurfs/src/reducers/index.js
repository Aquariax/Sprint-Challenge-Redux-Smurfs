/*
  Be sure to import in all of the action types from `../actions`
*/
import{ 
  FETCH_SMURF_START, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILURE,
  SMURF_ADD,
  SMURF_DELETE
} from "../actions"

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurf: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) =>{
  console.log('reducer', action)
  switch(action.type){
     case FETCH_SMURF_START:
      return{
        ...state,
        error: "",
        fetching: true
      };

    case SMURF_ADD:
      return{
        ...state,
        fetching: true
      }

    case SMURF_DELETE:
    return{
      ...state,
      fetching: true
    }

    case FETCH_SMURF_SUCCESS:
      return{
        ...state,
        smurf: action.payload,
        fetching: false,
        error: ''
      }

      case FETCH_SMURF_FAILURE:
      return{
        ...state,
        error: action.payload ,
        fetching: false, 
      }

      default:
      return {...state};
  }
}

export default rootReducer;