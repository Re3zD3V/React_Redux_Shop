import React, { Component } from 'react';


class Product extends Component {

	handleClick = () => {
		console.log('clicked');
	}

	render() {
		return (
			<div className="container">
				<img src={ `/images/${this.props.name}.png` } alt={ this.props.name } />
				<p>Disponibilité:
					<span></span>
				</p>
				<button>Acheter</button>
			</div>
		);
	}
}

export default Product;