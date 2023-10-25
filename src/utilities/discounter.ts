const discounter = (price: number, percent: number): number => {
	return price - (price / 100) * percent;
};

export default discounter;
