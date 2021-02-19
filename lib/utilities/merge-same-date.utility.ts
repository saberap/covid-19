import { ICountrySummary } from 'lib/interfaces';

type MergeSameDate = (data: Array<ICountrySummary>) => Array<ICountrySummary>;
const mergeSameDate: MergeSameDate = data => {
   const countrySummaries: Array<ICountrySummary> = [];

   data.forEach(item => {
      const countryAtDate = countrySummaries.find(i => i.date === item.date);
      if (countryAtDate) {
         const filtered = countrySummaries.filter(
            i => i.date !== countryAtDate.date
         );
         const newObj: ICountrySummary = {
            active: countryAtDate.active + item.active,
            confirmed: countryAtDate.confirmed + item.confirmed,
            date: item.date,
            deaths: countryAtDate.deaths + item.deaths,
            recovered: countryAtDate.recovered + item.recovered,
         };
         filtered.push(newObj);
         countrySummaries.concat(filtered);
      } else {
         countrySummaries.push(item);
      }
   });

   return countrySummaries;
};
export default mergeSameDate;
