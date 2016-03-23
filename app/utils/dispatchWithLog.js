import store from '../store';

export default function dispatchWithLog(action){
	console.log('----orig state:----');
	console.log(store.getState());
	console.log('dispatching: ', action);
	store.dispatch({type: action})
	console.log('-----new state:----');
	console.log(store.getState());
	console.log('-------------------');
}