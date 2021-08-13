import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

	handleClick = () => {
		console.log('clicked');
	}

	render() {
		return (
			<div className="container">
				<img src={ `/images/${this.props.name}.png` } alt={ this.props.name } />
				<p>Disponibilité:
					<span className="count-products">
						{ this.props[ this.props.name ] }
					</span>
				</p>
				<button>Acheter</button>
			</div>
		);
	}
}

const mapStateToProps = ( state, ownProps ) => {
	return {
		[ownProps.name] : state[ownProps.stateName][ownProps.name]
	}
}

export default connect( mapStateToProps )( Product );