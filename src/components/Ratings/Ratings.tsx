import styled from 'styled-components';

import StarIcon from '../../assets/icons/star.svg?react';
import VisuallyHidden from '../VisuallyHidden';
import React from 'react';

type RatingsProps = {
  ratings: number;
  tag?: keyof React.JSX.IntrinsicElements;
};

const Ratings = ({ ratings, tag: Tag = 'div', ...props }: RatingsProps) => {
  const allStars = Array.from({ length: ratings }).map((el, i) => (
    <Star key={i} />
  ));

  return (
    <Tag {...props}>
      <VisuallyHidden>Ratings of {ratings}</VisuallyHidden>
      {allStars}
    </Tag>
  );
};

export default Ratings;

const Star = styled(StarIcon)`
  color: hsl(var(--color-accent-light));
  fill: hsl(var(--color-accent-light));
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 4px;
`;
