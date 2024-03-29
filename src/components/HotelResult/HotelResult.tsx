import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';

import { BREAKPOINTS, QUERIES } from '../../constant/design-token';
import GuestInfo from './GuestInfo';
import BookingButton from '../BookingButton';
import Ratings from '../Ratings';
import ExpandableReadMoreMobile from './ExpandableReadMoreMobile';
import ExpandableReadMoreDesktop from './ExpandableReadMoreDesktopProps';

type HotelResultProps = {
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

const HotelResult = ({
  title,
  destination,
  image,
  description,
  price,
  ratings,
  guests,
  arrivalDate,
  lengthOfStay,
  departingLocation,
}: HotelResultProps) => {
  const { width } = useWindowSize();

  const IS_MOBILE_AND_UP = width < BREAKPOINTS.tableMin;
  const IS_TABLET_AND_UP = width >= BREAKPOINTS.tableMin;
  const [numOfAdults, numOfChildren, numOfInfants] = guests;

  return (
    <Wrapper>
      <Container>
        <Img src={image} alt="Gorgeous view" />

        <DealDetails>
          <Title>{title}</Title>
          <Location>{destination}</Location>
          <StyledRatings ratings={ratings} tag="span" />
          <Info>
            <li>
              <GuestInfo
                adults={numOfAdults}
                children={numOfChildren}
                infants={numOfInfants}
              />
            </li>
            <li>
              <Bold>{arrivalDate}</Bold> for <Bold>{lengthOfStay} days</Bold>
            </li>
            <li>
              departing from <Bold>{departingLocation}</Bold>
            </li>
          </Info>

          {IS_MOBILE_AND_UP && (
            <ExpandableReadMoreMobile description={description} />
          )}

          <BookingButton price={price} headingLevel={4} />
        </DealDetails>
      </Container>

      {IS_TABLET_AND_UP && (
        <ExpandableReadMoreDesktop description={description} />
      )}
    </Wrapper>
  );
};

export default HotelResult;

const Wrapper = styled.section`
  background-color: hsl(var(--color-white));
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: initial;
  }
`;

const Container = styled.section`
  display: grid;

  @media ${QUERIES.tableAndUp} {
    grid-template-columns: 1fr 306px; // 800px - hotelImageWidth = 306px
  }
`;

const Img = styled.img`
  width: 100%;

  @media ${QUERIES.tableAndUp} {
    width: initial;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  max-width: fit-content;
  color: hsl(var(--color-primary));
`;

const Location = styled.p`
  color: hsl(var(--color-gray-500));
  letter-spacing: 1px;
  font-size: 0.9rem;
`;

const DealDetails = styled.div`
  padding: 1.25rem;

  @media ${QUERIES.tableAndUp} {
    padding-bottom: initial;
  }
`;

const StyledRatings = styled(Ratings)`
  display: block;
  margin-block: 0.4rem;
`;

const Info = styled.ul`
  font-size: 0.9rem;
  margin-bottom: 0.9rem;

  // Remove default styles
  list-style-type: none;
  padding-left: 0;
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
