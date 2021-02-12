const makePagination: (
   data: Array<any>,
   top: number,
   skip: number
) => Array<any> = (data, top, skip) => {
   return data.slice(skip, skip + top);
};
export default makePagination;
