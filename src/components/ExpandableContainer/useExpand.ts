import React from 'react';

const useExpand = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return [isExpanded, toggleExpand] as const;
};

export default useExpand;
