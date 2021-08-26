import { COMMENTS_LOADING, COMMENTS_LOADING_SUCCESS, COMMENTS_LOADING_ERROR } from './../actions';
import axios from 'axios';

const loadComments = () => {
	return {
		type: COMMENTS_LOADING
	}
}

const commentsLoadingSuccessful = comments => {
	return {
		type: COMMENTS_LOADING_SUCCESS,
		payload: comments
	}
}

const commentsLoadingFailed = error => {
	return {
		type: COMMENTS_LOADING_ERROR,
		payload: error
	}
}

const fetchComments = () => {
	return dispatch => {
		dispatch(loadComments());

		axios.get('https://jsonplaceholder.typicode.com/comments')
		.then(
			res => {
				dispatch( commentsLoadingSuccessful( res.data ) );
			}
		)
		.catch(
			err => {
				dispatch( commentsLoadingFailed( err.message ) );
			}
		);
	}
}

export default fetchComments;