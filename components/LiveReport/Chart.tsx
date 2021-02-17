import { ISummary } from 'lib/interfaces';
import React, { Dispatch, memo, SetStateAction } from 'react';
import {
   ZoomableGroup,
   ComposableMap,
   Geographies,
   Geography,
} from 'react-simple-maps';
import numeral from 'numeral';

import geoUrl from './world-110m.json';

interface Props {
   setTooltipContent: Dispatch<SetStateAction<string>>;
   data: Array<ISummary>;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MapChart = ({ setTooltipContent, data }: Props) => {
   const total = data.reduce(
      (total, cur) => total + parseInt(cur.totalConfirmed),
      0
   );

   const average = total / data.length;
   return (
      <>
         <ComposableMap
            data-tip=''
            projectionConfig={{ scale: 200, center: [1, 20] }}
            height={400}
         >
            <ZoomableGroup>
               <Geographies geography={geoUrl} height={200}>
                  {({ geographies }) =>
                     geographies.map(geo => {
                        const { NAME, ISO_A2 } = geo.properties;

                        const totalConfirmed = numeral(
                           data.find((item: ISummary) => item.code === ISO_A2)
                              ?.totalConfirmed
                        );

                        const biggerThanAverage =
                           totalConfirmed.value() > average;

                        return (
                           <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onMouseEnter={() => {
                                 setTooltipContent(
                                    `${NAME} — ${
                                       totalConfirmed.format('0,0') ??
                                       'No report found.'
                                    }`
                                 );
                              }}
                              onMouseLeave={() => {
                                 setTooltipContent('');
                              }}
                              style={{
                                 default: {
                                    fill: `${
                                       biggerThanAverage ? '#fb4c47' : '#167c51'
                                    }`,

                                    outline: 'none',
                                 },
                                 hover: {
                                    fill: `${
                                       biggerThanAverage ? '#ffd0d0' : '#128e5a'
                                    }`,
                                    outline: 'none',
                                 },
                                 pressed: {
                                    fill: '#E42',
                                    outline: 'none',
                                 },
                              }}
                           />
                        );
                     })
                  }
               </Geographies>
            </ZoomableGroup>
         </ComposableMap>
      </>
   );
};

export default memo(MapChart);
