export const dataRevealer = (num) => {
   const day = num.toString().slice(6)
   const month = num.toString().slice(4, 6);
   const year = num.toString().slice(0, 4);
   return day + "-" + month + "-" + year;
}

export const numberToDate = (num) => {
   const day = num.toString().slice(6);
		const month = num.toString().slice(4, 6);
		const year = num.toString().slice(0, 4);
		return year + "-" + day + "-" + month;
}

export const dateToNumber = (str) => {
   const day = str.split("-")[2];
	const month = str.split("-")[1];
	const year = str.split("-")[0];
   return Number(year + month + day);
}