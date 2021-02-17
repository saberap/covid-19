const dynamicSort: (property: string, sortType: 'asc' | 'desc') => any = (
   property,
   sortType
) => {
   return (a: any, b: any) => {
      const type = sortType === 'asc' ? 1 : -1;
      const sortOrder =
         a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return sortOrder * type;
   };
};
export default dynamicSort;
