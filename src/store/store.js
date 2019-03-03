
import { likeReducer } from '../reducers/likereducer';
import {createStore} from 'redux';

export const store= createStore(likeReducer);
console.log("inside store..",store);