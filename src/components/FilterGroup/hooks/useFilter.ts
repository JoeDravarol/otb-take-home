import React from 'react';

export enum FilterEnum {
  alphabetically = 'alphabetically',
  price = 'price',
  rating = 'rating',
}

const useFilter = (initialFilter = FilterEnum.alphabetically) => {
  const [activeFilter, setActiveFilter] = React.useState(initialFilter);

  const filterToAlphabetically = () => {
    setActiveFilter(FilterEnum.alphabetically);
  };

  const filterToPrice = () => {
    setActiveFilter(FilterEnum.price);
  };

  const filterToRating = () => {
    setActiveFilter(FilterEnum.rating);
  };

  return {
    activeFilter,
    filterToAlphabetically,
    filterToPrice,
    filterToRating,
  };
};

export default useFilter;
