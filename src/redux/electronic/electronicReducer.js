import { BUY_PHONE, BUY_TABLET, BUY_TV } from "../actions";
import { electronicInitialState } from './electronicInitialState';

const electronicReducer = (state = electronicInitialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			if (state.phone >= action.quantity) {
				return {
					...state,
					phone : state.phone - action.quantity
				};
			}
			return state;
		case BUY_TABLET:
			if (state.tablet >= action.quantity) {
				return {
					...state,
					tablet : state.tablet - action.quantity
				};
			}
			return state;
		case BUY_TV:
			if (state.tv >= action.quantity) {
				return {
					...state,
					tv : state.tv - action.quantity
				};
			}
			return state;
		default:
			return state;
	}
}

export default electronicReducer;