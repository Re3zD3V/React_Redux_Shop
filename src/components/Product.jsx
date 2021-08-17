import React from 'react';
import { useSelector } from 'react-redux';

function Product(props) {

	let countProducts = useSelector( state => state[props.stateName][props.name] );

	return (
		<div className="container">
			<img src={ `/images/${props.name}.png` } alt={ props.name } />
			<p>Disponibilité:
				<span className="count-products">
					{ countProducts }
				</span>
			</p>
			<button>Acheter</button>
		</div>
	);
}

export default Product;