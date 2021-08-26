import React, { useEffect } from 'react'
import { COMMENTS_STATE } from '../redux/store'
import { connect } from 'react-redux';
import fetchComments from '../redux/comments/commentsAction';

const CommentsContainer = ( { comments, fetchComments } ) => {

	useEffect(() => {
		fetchComments();
	}, [fetchComments]);

	return (
		<div>
			<h2>
				Comments :
			</h2>
			<hr />
			{
				( comments.isLoading) ?
					(
						<span>Loading comments ...</span>
					)
				:
					( comments.error) ?
						<span>{ comments.error }</span>
					:
						comments.data.map( comment => {
							return (
								<div key={ comment.id } className="border border-1 mb-2">
									<p>{ comment.body }</p>
								</div>
							);
						})
						
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		comments : state[COMMENTS_STATE]
	};
}

const mapDispatchToProps = dispatch => {
	return {
		fetchComments : () => dispatch( fetchComments() )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
