import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Options {
   chart: {
      id: string;
      [key: string]: any;
   };
   [key: string]: any;
}

interface Series {
   name: string;
   data: any;
}

interface Props {
   options: Options;
   type?:
      | 'line'
      | 'area'
      | 'bar'
      | 'radar'
      | 'histogram'
      | 'pie'
      | 'donut'
      | 'radialBar'
      | 'scatter'
      | 'bubble'
      | 'heatmap'
      | 'candlestick';
   series: Array<Series> | Array<number>;
   width?: string | number;
   height?: string | number;
}

export default function Chart({
   type,
   height,
   options,
   series,
   width,
}: Props): ReactElement {
   const { chart, ...chartOptions } = options;
   return (
      <div className='chart'>
         <ApexChart
            options={{
               chart: {
                  ...chart,
               },
               ...chartOptions,
            }}
            series={series}
            type={type ?? 'line'}
            width={width ?? '100%'}
            height={height ?? 'auto'}
         />
      </div>
   );
}
