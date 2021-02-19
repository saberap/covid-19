import { ReactElement, useState } from 'react';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';
import { MoonLoader as Loader } from 'react-spinners';

import { navItemsMap } from 'lib/constants/nav-items.constant';
import { ICountrySummary, ISummary } from 'lib/interfaces';
import { fetchAPI, mergeSameDate } from 'lib/utilities';

import CountryList from './CountryList';
import MapChart from './MapChart';
import CountryDetail from './CountryDetail';
interface Props {
   data: Array<ISummary>;
}

interface SelectedCountryData {
   summary?: ISummary;
   countryData?: ICountrySummary[];
}
export default function LiveReport({ data }: Props): ReactElement {
   const [content, setContent] = useState('');
   const [loading, setLoading] = useState(false);
   const [
      selectedCountryData,
      setSelectedCountryData,
   ] = useState<SelectedCountryData>({});

   const itemClickHandler = (item: ISummary): void => {
      const api = new fetchAPI();
      setLoading(true);
      const now = new Date();
      const from = new Date();
      from.setDate(now.getDate() - 30);
      api.get(
         `live/country/united-states/status/confirmed/date/${from.toISOString()}`
      )
         .then(res => res.data)
         .then(
            (data: Array<any>): Array<ICountrySummary> => {
               const formattedData: Array<ICountrySummary> = data.map(item => ({
                  active: item.Active,
                  confirmed: item.Confirmed,
                  deaths: item.Deaths,
                  recovered: item.Recovered,
                  date: item.Date,
               }));
               return formattedData;
            }
         )
         .then(formattedData => {
            const msd = mergeSameDate(formattedData);
            setSelectedCountryData({ summary: item, countryData: msd });
            setLoading(false);
         });
   };
   return (
      <div
         className='section section__linear-gradient-from-bottom md:pb-14 md:relative'
         id={navItemsMap.get('LIVEREPORT')?.url}
      >
         <div className='container'>
            <div className='md:flex md:py-10 md:space-x-5'>
               <div
                  className={`w-full mb-5 ${
                     loading ? 'flex justify-center items-center' : ''
                  } bg-white shadow-xl p-5 rounded-lg md:relative md:w-8/12 md:mb-0`}
               >
                  {loading ? (
                     <Loader color={'red'} loading={loading} size={150} />
                  ) : (
                     <>
                        {selectedCountryData.summary ? (
                           <CountryDetail
                              countrySummary={selectedCountryData.summary}
                              summaryByDate={selectedCountryData.countryData}
                              setSelectedCountryData={
                                 setSelectedCountryData as any
                              }
                           />
                        ) : (
                           <>
                              <MapChart
                                 setTooltipContent={setContent}
                                 data={data}
                              />
                              <ReactTooltip backgroundColor='black'>
                                 {content}
                              </ReactTooltip>
                           </>
                        )}
                     </>
                  )}
               </div>
               <div className='w-full p-5 bg-white shadow-xl rounded-lg  md:relative md:w-4/12'>
                  <CountryList
                     items={data}
                     itemClickHandler={itemClickHandler}
                  />
               </div>
            </div>
         </div>
         <div className='hidden md:absolute md:bottom-0 md:right-5'>
            <Image
               src='/static/assets/images/Virus.svg'
               alt='Corona Virus'
               width={283}
               height={292}
            />
         </div>
      </div>
   );
}
