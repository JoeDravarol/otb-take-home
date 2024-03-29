import React from 'react';

import hotelImage1 from '../../assets/images/hotel-image-1.png';
import hotelImage2 from '../../assets/images/hotel-image-2.png';
import hotelImage3 from '../../assets/images/hotel-image-3.png';
import { FilterEnum } from '../../components/FilterGroup';

const useHotels = () => {
  const [hotels, setHotels] = React.useState(() =>
    data.sort((a, b) => (a.title < b.title ? -1 : 1))
  );

  const sortHotelBy = (condition: FilterEnum) => {
    switch (condition) {
      case FilterEnum.alphabetically:
        setHotels((hotels) =>
          hotels.sort((a, b) => (a.title < b.title ? -1 : 1))
        );
        break;
      case FilterEnum.price:
        // Lowest price first
        setHotels((hotels) => hotels.sort((a, b) => a.price - b.price));
        break;
      case FilterEnum.rating:
        // Highest rating first
        setHotels((hotels) => hotels.sort((a, b) => b.ratings - a.ratings));
        break;
    }
  };

  return { hotels, sortHotelBy };
};

export default useHotels;

type HotelResult = {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  price: number;
  ratings: number;
  guests: [number, number?, number?]; // Adult | Child | Infant
  arrivalDate: string;
  lengthOfStay: number;
  departingLocation: string;
};

const data: HotelResult[] = [
  {
    id: crypto.randomUUID(),
    title: 'Iberostar Grand Salome',
    destination: 'Costa Adeje, Tenerife',
    image: hotelImage1,
    description:
      'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.',
    price: 1136.5,
    ratings: 5,
    guests: [2, 2, 1],
    arrivalDate: '3rd July 2019',
    lengthOfStay: 7,
    departingLocation: 'East Midlands',
  },
  {
    id: crypto.randomUUID(),
    title: 'Aguamarina Golf Hotel',
    destination: 'Costa Adeje, Tenerife',
    image: hotelImage2,
    description:
      'The Aguamarina Golf Hotel Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab excepturi laudantium facere, possimus, sint quae at itaque doloribus quibusdam dolores eos obcaecati totam omnis? Eum ad perferendis accusamus qui!',
    price: 696.8,
    ratings: 4,
    guests: [2, 1],
    arrivalDate: '27th May 2019',
    lengthOfStay: 7,
    departingLocation: 'Liverpool',
  },
  {
    id: crypto.randomUUID(),
    title: 'Las Piramides Resort',
    destination: 'Costa Adeje, Tenerife',
    image: hotelImage3,
    description:
      'The Las Piramides Resort Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab excepturi laudantium facere, possimus, sint quae at itaque doloribus quibusdam dolores eos obcaecati totam omnis? Eum ad perferendis accusamus qui!',
    price: 499.99,
    ratings: 3,
    guests: [2, 2],
    arrivalDate: '3rd July 2019',
    lengthOfStay: 7,
    departingLocation: 'Manchester',
  },
];
