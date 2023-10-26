const fullTrim = (str: string): string => {
	const res: string = str.split(" ").join("").toLocaleLowerCase();
	return res;
};

export default fullTrim;
