import styled from 'styled-components';
import { QUERIES } from '../../constant/design-token';

type BookingButtonProps = {
  headingLevel?: number;
  price: number;
};

const BookingButton = ({ price, headingLevel = 3 }: BookingButtonProps) => {
  const intlPriceFormat = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <Button>
      <Label as={`h${headingLevel}`}>Book now</Label>
      <Price>£{intlPriceFormat}</Price>
    </Button>
  );
};

export default BookingButton;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
  font-weight: var(--font-weight-bold);
  background-color: hsl(var(--color-accent-light));
  color: hsl(var(--color-primary));
  cursor: pointer;

  // Remove default styles
  border: none;
`;

const Label = styled.h2`
  font-size: 0.95rem;
`;

const Price = styled.span`
  font-size: 1.25rem;
  letter-spacing: 1px;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.7rem;
  }
`;
