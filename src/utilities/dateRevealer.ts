export const dataRevealer = (num: number = 20240101) => {
	const day = num.toString().slice(6);
	const month = num.toString().slice(4, 6);
	const year = num.toString().slice(0, 4);
	return day + "-" + month + "-" + year;
};

export const numberToDate = (num: number = 20240101) => {
	const day = num.toString().slice(6);
	const month = num.toString().slice(4, 6);
	const year = num.toString().slice(0, 4);
	return year + "-" + month + "-" + day;
};

export const dateToNumber = (str: string = "20240101") => {
	const day = str.split("-")[2];
	const month = str.split("-")[1];
	const year = str.split("-")[0];
	return Number(year + month + day);
};
