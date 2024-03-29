import styled from 'styled-components';

import StarIcon from '../../assets/icons/star.svg?react';
import SortByAlphaIcon from '../../assets/icons/sort-by-alpha.svg?react';
import PoundIcon from '../../assets/icons/currency-pound.svg?react';
import { QUERIES } from '../../constant/design-token';

import FilterButton from '../FilterButton';
import useScrollDirection from './hooks/useScrollDirection';
import { FilterEnum } from './hooks/useFilter';

type FilterGroupProps = {
  activeFilter: FilterEnum;
  handleFilterAlphabetically: () => void;
  handleFilterPrice: () => void;
  handleFilterRating: () => void;
};

const FilterGroup = ({
  activeFilter,
  handleFilterAlphabetically,
  handleFilterPrice,
  handleFilterRating,
}: FilterGroupProps) => {
  const scrollDirection = useScrollDirection();

  return (
    <StyledFilterGroup $isScrollingUp={scrollDirection === 'up'}>
      <StyledFilterButton
        icon={<SortByAlphaIcon />}
        $active={activeFilter === FilterEnum.alphabetically}
        onClick={handleFilterAlphabetically}
      >
        sort <Bold>alphabetically</Bold>
      </StyledFilterButton>

      <StyledFilterButton
        icon={<PoundIcon />}
        $active={activeFilter === FilterEnum.price}
        onClick={handleFilterPrice}
      >
        sort by <Bold>price</Bold>
      </StyledFilterButton>

      <StyledFilterButton
        icon={<StarIcon />}
        $active={activeFilter === FilterEnum.rating}
        onClick={handleFilterRating}
      >
        sort by <Bold>star rating</Bold>
      </StyledFilterButton>
    </StyledFilterGroup>
  );
};

export default FilterGroup;

type StyledFilterGroupProps = {
  $isScrollingUp: boolean;
};

const StyledFilterGroup = styled.aside<StyledFilterGroupProps>`
  height: fit-content; // Enable sticky scroll on desktop
  z-index: 10; // Appear infront of other position element (Target tablet size)

  ${(props) =>
    props.$isScrollingUp &&
    `
    position: sticky;
    top: 0;
  `}

  // Default to sticky without the need to scroll up
  @media ${QUERIES.laptopAndUp} {
    position: sticky;
    top: 0;
  }
`;

type StyledFilterButtonProps = {
  $active?: boolean;
};

const StyledFilterButton = styled(FilterButton)<StyledFilterButtonProps>`
  display: block;
  width: 17.5rem; // 280px
  border-bottom: 2px solid hsl(var(--color-primary) / 0.4);

  &:last-of-type {
    border: none;
  }

  ${(props) =>
    props.$active &&
    `
    --color: hsl(var(--color-white));
    --bg-color: hsl(var(--color-primary));
    --hover-color: hsl(var(--color-primary));

    & svg {
      fill: var(--color);
      color: var(--color);
    }
  `}
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
