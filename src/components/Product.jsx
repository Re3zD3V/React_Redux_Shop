import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

	componentDidMount = () => {
		getActionsFunc( this.props.stateName, this.props.name ).then( ( func ) => {
			this.setState(
				{
					buyProduct : () => this.props.dispatch( func() )
				}
			);
		});

	}

	handleClick = () => {
		this.state.buyProduct();
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
				<button onClick={ this.handleClick }>Acheter</button>
			</div>
		);
	}
}

const mapStateToProps = ( state, ownProps ) => {
	return {
		[ownProps.name] : state[ownProps.stateName][ownProps.name]
	}
}

const getActionsFunc = async ( stateName, name ) => {
	let actionFileName = `${ stateName }Action`;
	let productName = ( name ).charAt( 0 ).toUpperCase() + ( name ).slice( 1 );
	let buyFuncName = `buy${ productName }`;

	let actionFile = await import( `./../redux/${ stateName }/${ actionFileName }` );

	return actionFile[buyFuncName];
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		dispatch
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Product );