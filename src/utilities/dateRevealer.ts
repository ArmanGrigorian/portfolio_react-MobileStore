export const dataRevealer = (num) => {

   const day = num.toString().slice(6)
   const month = num.toString().slice(4, 6);
   const year = num.toString().slice(0, 4);
   return day + "-" + month + "-" + year;
}