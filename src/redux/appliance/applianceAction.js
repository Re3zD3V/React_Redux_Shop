import { BUY_COOLER } from "../actions";

export const buyCooler = (quantity = 1) => {
	return {
		type : BUY_COOLER,
		quantity
	}
}