const fullTrim = (str: string): string => {
	const res = str.split(" ").join("").toLocaleLowerCase();
	return res;
};

export default fullTrim;
