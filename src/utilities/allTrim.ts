export const allTrim = (str: string): string => {
   const res = str.split(" ").join("").toLocaleLowerCase()
   return res;
};
