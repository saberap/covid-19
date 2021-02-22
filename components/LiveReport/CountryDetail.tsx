import { Dispatch, ReactElement, SetStateAction } from 'react';
import dynamic from 'next/dynamic';
import { Map } from 'react-feather';
import ReactTooltip from 'react-tooltip';
import CountUp from 'react-countup';

import { ICountrySummary, ISummary } from 'lib/interfaces';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface Props {
   countrySummary: ISummary;
   summaryByDate: ICountrySummary[];
   setSelectedCountryData: Dispatch<SetStateAction<unknown>>;
}

export default function CountryDetail({
   countrySummary,
   summaryByDate,
   setSelectedCountryData,
}: Props): ReactElement {
   const chartData = summaryByDate.map(item => [
      new Date(item.date).getTime(),
      item.confirmed,
   ]);
   return (
      <>
         <div className='flex justify-between'>
            <h2 className='font-bold'>In {countrySummary.name}</h2>
            <Map
               className='cursor-pointer'
               data-tip='Show Map'
               onClick={() => setSelectedCountryData({})}
            />
            <ReactTooltip backgroundColor='black' />
         </div>
         <div className='flex space-x-3 mt-5'>
            <div className='w-1/3 bg-red-light p-5 rounded-lg shadow-md'>
               <h4 className='text-sm font-bold text-red md:text-2xl'>
                  Total Confirmed
               </h4>
               <CountUp
                  end={parseInt(countrySummary.totalConfirmed)}
                  duration={2}
                  separator=','
                  className='text-red-400 text-center font-bold'
               />
            </div>
            <div className='w-1/3 bg-gray-300 p-5 rounded-lg shadow-md'>
               <h4 className='text-sm font-bold text-gray-600 md:text-2xl'>
                  Total Deaths
               </h4>
               <CountUp
                  end={countrySummary.totalDeaths}
                  duration={2}
                  separator=','
                  className='text-gray-400 text-center font-bold'
               />
            </div>
            <div className='w-1/3 bg-green-200 p-5 rounded-lg shadow-md'>
               <h4 className='text-sm font-bold text-green-600 md:text-2xl'>
                  Total Recovered
               </h4>
               <CountUp
                  end={countrySummary.totalRecovered}
                  duration={2}
                  separator=','
                  className='text-green-400 text-center font-bold text-xs'
               />
            </div>
         </div>
         <p className='font-thin italic text-sm mt-3'>
            Last Update: {new Date(countrySummary.date).toLocaleString()}
         </p>
         <div>
            <ApexChart
               type='area'
               series={[
                  {
                     data: chartData,
                  },
               ]}
               height={320}
               options={{
                  chart: {
                     id: 'area-datetime',
                     type: 'area',
                     height: 100,
                     zoom: {
                        autoScaleYaxis: true,
                     },
                  },
                  annotations: {
                     yaxis: [
                        {
                           y: 30,
                           borderColor: '#999',
                           label: {
                              show: true,
                              text: 'Support',
                              style: {
                                 color: '#fff',
                                 background: '#00E396',
                              },
                           },
                        },
                     ],
                  },
                  dataLabels: {
                     enabled: false,
                  },
                  markers: {
                     size: 0,
                     style: 'hollow',
                  },
                  xaxis: {
                     type: 'datetime',
                     tickAmount: 6,
                  },
                  tooltip: {
                     x: {
                        format: 'dd MMM yyyy',
                     },
                  },
                  fill: {
                     type: 'gradient',
                     gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100],
                     },
                  },
               }}
            />
         </div>
      </>
   );
}
