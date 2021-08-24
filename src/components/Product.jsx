import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa';

const getActionToDispatch = async ( stateName, name ) => {
	let actionFileName = `${ stateName }Action`;
	let productName = ( name ).charAt( 0 ).toUpperCase() + ( name ).slice( 1 );
	let buyFuncName = `buy${ productName }`;

	let actionFile = await import( `./../redux/${ stateName }/${ actionFileName }` );

	return actionFile[ buyFuncName ];
}

const handleBuyClick = ( event, stateName, name, dispatch ) => {
	// Get current value of quantity to buy
	var target = (event.target) ? event.target : event.srcElement;
	var product = target.closest('.product');
	var currentVal = product.querySelector('input').value;
	
	getActionToDispatch( stateName, name )
	.then( action => {
		dispatch( action(currentVal) );
	});
}

const handlePlusClick = ( e ) => {
	// Stop acting like a button
	e.preventDefault();

	// Get its current value
	var target = (e.target) ? e.target : e.srcElement;
	var product = target.closest('.product');
	var input = product.querySelector('input');
	var currentVal = parseInt(input.value);
	
	// If is not undefined
	if (!isNaN(currentVal)) {
		// Increment
		input.value = currentVal + 1;
	} else {
		// Otherwise put a 1 there
		input.value = 1;
	}
}

const handleMinusClick = ( e ) => {
	// Stop acting like a button
	e.preventDefault();

	// Get its current value
	var target = (e.target) ? e.target : e.srcElement;
	var product = target.closest('.product');
	var input = product.querySelector('input');
	var currentVal = parseInt(input.value);
	
	// If is not undefined and more than one
	if (!isNaN(currentVal) && currentVal > 1) {
		// Decrement one
		input.value = currentVal - 1;
	} else {
		// Otherwise put a 1 there
		input.value = 1;
	}
}

function Product(props) {

	const countProducts = useSelector( state => state[props.stateName][props.name] );
	const dispatch = useDispatch();

	return (
		<div className="product">
			<div className="row">
				<img src={ `/images/${props.name}.png` } alt={ props.name } />
			</div>
			<div className="row mt-2">
				<span>Disponibilité:
					<span className="count-products">
						{ countProducts }
					</span>
				</span>
			</div>
			<div className="row mt-2 g-0 justify-content-center">
				<div className="col-2">
					<button onClick={ ( event ) => handleMinusClick( event ) } type="button" className="button hollow circle" data-quantity="minus" data-field="quantity">
						<FaMinus/>
					</button>
				</div>
				<div className="col-5">
					<input className="w-100" type="number" id="quantity" name="quantity" defaultValue="1" min="1"></input>
				</div>
				<div className="col-2">
					<button onClick={ ( event ) => handlePlusClick( event ) } type="button" className="button hollow circle" data-quantity="plus" data-field="quantity">
						<FaPlus/>
					</button>
				</div>
			</div>
			<div className="row mt-2">
				<button onClick={ (event) => handleBuyClick( event, props.stateName, props.name, dispatch ) }>Acheter</button>
			</div>
		</div>
	);
}

export default Product;