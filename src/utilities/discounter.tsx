const discounter = (price, percent) => {
	return price - (price / 100) * percent;
};

export { discounter };
