import ICountry from './ICountry.interface';

export default interface ISummary extends ICountry {
   newConfirmed: string;
   totalConfirmed: string;
   newDeaths: number;
   totalDeaths: number;
   newRecovered: number;
   totalRecovered: number;
   date: string;
}
