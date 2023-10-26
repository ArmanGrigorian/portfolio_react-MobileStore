export const dataRevealer = (num: number = 20240101): string => {
	const day: string = num.toString().slice(6);
	const month: string = num.toString().slice(4, 6);
	const year: string = num.toString().slice(0, 4);
	return day + "-" + month + "-" + year;
};

export const numberToDate = (num: number = 20240101): string => {
	const day: string = num.toString().slice(6);
	const month: string = num.toString().slice(4, 6);
	const year: string = num.toString().slice(0, 4);
	return year + "-" + month + "-" + day;
};

export const dateToNumber = (str: string = "20240101"): number => {
	const day: string = str.split("-")[2];
	const month: string = str.split("-")[1];
	const year: string = str.split("-")[0];
	return Number(year + month + day);
};
