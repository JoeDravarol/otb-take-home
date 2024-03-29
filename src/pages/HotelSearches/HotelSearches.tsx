import styled from 'styled-components';

import backgroundImage from '../../assets/images/background.png';
import { QUERIES } from '../../constant/design-token';

import HotelResult from '../../components/HotelResult';
import FilterGroup, {
  FilterEnum,
  useFilter,
} from '../../components/FilterGroup';
import useHotels from './useHotels';

const HotelSearches = () => {
  const { hotels, sortHotelBy } = useHotels();
  const {
    activeFilter,
    filterToAlphabetically,
    filterToPrice,
    filterToRating,
  } = useFilter();

  const handleFilterAlphabetically = () => {
    sortHotelBy(FilterEnum.alphabetically);
    filterToAlphabetically();
  };

  const handleFilterPrice = () => {
    sortHotelBy(FilterEnum.price);
    filterToPrice();
  };

  const handleFilterRating = () => {
    sortHotelBy(FilterEnum.rating);
    filterToRating();
  };

  return (
    <Wrapper>
      <GridContainer>
        <FilterGroup
          activeFilter={activeFilter}
          handleFilterAlphabetically={handleFilterAlphabetically}
          handleFilterPrice={handleFilterPrice}
          handleFilterRating={handleFilterRating}
        />

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
      </GridContainer>
    </Wrapper>
  );
};

export default HotelSearches;

const Wrapper = styled.article`
  background-image: url(${backgroundImage});
  min-height: 100svh; // Fill bgImage full screen height
  padding: clamp(1rem, calc(2.5vw + 0.5rem), 10rem); // Scale with screen width
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  margin-inline: auto;
  width: fit-content;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 0.5fr 2fr;
    grid-gap: 3rem;
  }
`;

const HotelResults = styled.div`
  @media ${QUERIES.tableAndUp} {
    width: 800px;
    max-width: 800px;
  }
`;
