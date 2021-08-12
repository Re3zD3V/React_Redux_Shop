import { BUY_PHONE, BUY_TABLET, BUY_TV } from "./../actions";

export const buyPhone = (quantity = 1) => {
	return {
		type : BUY_PHONE,
		quantity
	}
}

export const buyTablet = (quantity = 1) => {
	return {
		type : BUY_TABLET,
		quantity
	}
}

export const buyTv = (quantity = 1) => {
	return {
		type : BUY_TV,
		quantity
	}
}