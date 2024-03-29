import styled from 'styled-components';

import ChevronDownIcon from '../../assets/icons/chevron-down.svg?react';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg?react';

import ExpandableContainer, { useExpand } from '../ExpandableContainer';

type ExpandableReadMoreDesktopProps = {
  description: string;
};

const ExpandableReadMoreDesktop = ({
  description,
}: ExpandableReadMoreDesktopProps) => {
  const [isExpanded, toggleExpand] = useExpand();

  const CollapsibleText = isExpanded ? (
    <Bold>Read less</Bold>
  ) : (
    <Bold>Read more</Bold>
  );
  const CollapsibleIcon = isExpanded ? (
    <ChevronDownIcon />
  ) : (
    <ChevronRightIcon />
  );

  return (
    <div>
      <ReadMoreButton onClick={toggleExpand}>
        {CollapsibleText} about this hotel {CollapsibleIcon}
      </ReadMoreButton>

      <StyledExpandableContainer
        isExpanded={isExpanded}
        tag="div"
        $isExpanded={isExpanded}
      >
        <DetailOverview>Overview</DetailOverview>
        <p>{description}</p>
      </StyledExpandableContainer>
    </div>
  );
};

export default ExpandableReadMoreDesktop;

type StyledExpandableContainerProps = {
  $isExpanded: boolean;
};

const StyledExpandableContainer = styled(
  ExpandableContainer
)<StyledExpandableContainerProps>`
  --bottom-spacing: 1.5rem;

  margin-bottom: ${(props) => props.$isExpanded && 'var(--bottom-spacing)'};
`;

const ReadMoreButton = styled.button`
  --block-spacing: 1rem;
  --bottom-spacing: 1.5rem;

  width: 100%;
  padding-block: var(--block-spacing);
  margin-bottom: var(--bottom-spacing);
  background-color: hsl(var(--color-primary-light));
  color: hsl(var(--color-primary));
  cursor: pointer;

  & svg {
    stroke-width: 2.5;
    display: inline-block;
    margin-left: 10px;
    vertical-align: bottom; // Align icon with text
  }

  // Remove default styles
  border: none;
  border-color: transparent;
`;

const DetailOverview = styled.h3`
  color: hsl(var(--color-primary));
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
