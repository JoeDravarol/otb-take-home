import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/images/background.png';
import hotelImage1 from '../assets/images/hotel-image-1.png';
import hotelImage2 from '../assets/images/hotel-image-2.png';
import hotelImage3 from '../assets/images/hotel-image-3.png';

import HotelResult from '../components/HotelResult';
import { QUERIES } from '../constant/design-token';

const HotelSearches = () => {
  const [hotels, setHotels] = React.useState(data);

  return (
    <Wrapper>
      <HotelResults>
        {hotels.map((hotel) => (
          <HotelResult
            key={hotel.id}
            title={hotel.title}
            destination={hotel.destination}
            image={hotel.image}
            description={hotel.description}
            price={hotel.price}
            ratings={hotel.ratings}
            guests={hotel.guests}
            arrivalDate={hotel.arrivalDate}
            lengthOfStay={hotel.lengthOfStay}
            departingLocation={hotel.departingLocation}
          />
        ))}
      </HotelResults>
    </Wrapper>
  );
};

export default HotelSearches;

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  min-height: 100svh; // Fill bgImage full screen height
  padding: clamp(1rem, calc(2.5vw + 0.5rem), 10rem); // Scale with screen width
`;

const HotelResults = styled.div`
  @media ${QUERIES.tableAndUp} {
    width: 800px;
    max-width: 800px;
  }
`;

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
