import {combineReducer} from 'redux';
import postReducer from './postReducer';

export default combineReducer({
    posts:  postReducer
});