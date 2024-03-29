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
    <ExpandableWrapper>
      <StyledExpandableContainer
        isExpanded={isExpanded}
        tag="div"
        $isExpanded={isExpanded}
      >
        <ReadMoreButton onClick={toggleExpand}>
          {CollapsibleText} about this hotel {CollapsibleIcon}
        </ReadMoreButton>
        <DetailOverview>Overview</DetailOverview>
        <p>{description}</p>
      </StyledExpandableContainer>
    </ExpandableWrapper>
  );
};

export default ExpandableReadMoreDesktop;

const ExpandableWrapper = styled.section`
  position: relative;
`;

type StyledExpandableContainerProps = {
  $isExpanded: boolean;
};

const StyledExpandableContainer = styled(
  ExpandableContainer
)<StyledExpandableContainerProps>`
  --inline-spacing: 1.25rem;
  --block-spacing: 1.5rem 2rem;

  padding-block: ${(props) => props.$isExpanded && 'var(--block-spacing)'};
  padding-inline: var(--inline-spacing);
  background: var(--color-white);
`;

const ReadMoreButton = styled.button`
  --block-spacing: 0.35rem;

  padding-block: var(--block-spacing);
  padding-inline: var(--inline-spacing);
  background-color: var(--color-white);
  color: var(--color-primary);
  cursor: pointer;

  position: absolute;
  top: calc((var(--block-spacing) + 1.85rem) * -1); // Prevent overflow outside image
  left: 0;

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
  color: var(--color-primary);
`;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
