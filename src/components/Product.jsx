import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const getActionToDispatch = async ( stateName, name ) => {
	let actionFileName = `${ stateName }Action`;
	let productName = ( name ).charAt( 0 ).toUpperCase() + ( name ).slice( 1 );
	let buyFuncName = `buy${ productName }`;

	let actionFile = await import( `./../redux/${ stateName }/${ actionFileName }` );

	return actionFile[ buyFuncName ];
}

const handleClick = ( stateName, name, dispatch ) => {
	getActionToDispatch( stateName, name )
	.then( action => {
		dispatch( action() );
	});
}

function Product(props) {

	const countProducts = useSelector( state => state[props.stateName][props.name] );
	const dispatch = useDispatch();


	return (
		<div className="container">
			<img src={ `/images/${props.name}.png` } alt={ props.name } />
			<p>Disponibilité:
				<span className="count-products">
					{ countProducts }
				</span>
			</p>
			<button onClick={ () => handleClick( props.stateName, props.name, dispatch ) }>Acheter</button>
		</div>
	);
}

export default Product;