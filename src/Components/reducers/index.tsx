import { combineReducers } from 'redux';
import { changeSongs } from './ReducerFile';

const rootReducer = combineReducers({
    songsFound: changeSongs,
  // Add more reducers here if needed
});

export default rootReducer;
