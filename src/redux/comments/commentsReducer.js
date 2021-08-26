import { COMMENTS_LOADING, COMMENTS_LOADING_SUCCESS, COMMENTS_LOADING_ERROR } from './../actions';
import { commentsInitialState } from './commentsInitialState';

const commentsReducer = (state = commentsInitialState, action) => {
	switch (action.type) {
		case COMMENTS_LOADING:
			return {
				...state,
				isLoading: true,
				data: [],
				error: ''
			};
		case COMMENTS_LOADING_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
				error: ''
			};
		case COMMENTS_LOADING_ERROR:
			return {
				...state,
				isLoading: false,
				data: [],
				error: action.payload
			};
		default:
			return state;
	}
}

export default commentsReducer;