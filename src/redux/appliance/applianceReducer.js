import { BUY_COOLER } from "../actions";
import { applianceInitialState } from './applianceInitialState';

const applianceReducer = (state = applianceInitialState, action) => {
	switch (action.type) {
		case BUY_COOLER:
			if (state.cooler >= action.quantity) {
				return {
					...state,
					cooler : state.cooler - action.quantity
				};
			}
			return state;
		default:
			return state;
	}
}

export default applianceReducer;