import React, { useEffect, useState } from 'react';
import { useAppSelector } from '~/app/hook';
import Loading from '~/components/Loading';
import PlaceComponent from '~/components/Place';
import { Place } from '~/types/entity';

const DATA_PLACE_GRID = [
  ['h-[400px]', 'h-[500px]', 'h-[600px]'],
  ['h-[600px]', 'h-[400px]', 'h-[500px]'],
  ['h-[500px]', 'h-[600px]', 'h-[400px]'],
];

const Places = (props: { loading: boolean }) => {
  const place: Place[] = useAppSelector((state) => state.places.datas);
  const { loading } = props;
  let count = 0;

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[1532px]">
        {loading ? (
          <Loading />
        ) : (
          DATA_PLACE_GRID.map((row, indexPlace) => {
            return (
              <div className="grid gap-4" key={indexPlace}>
                {row.map((col, index) => {
                  return (
                    <div key={index} className={`${col}`}>
                      {place && <PlaceComponent place={place[count++]} />}
                    </div>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Places;
