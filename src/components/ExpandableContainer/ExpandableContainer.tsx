import React from 'react';
import styled from 'styled-components';

type ExpandableContainerProps = {
  isExpanded: boolean;
  tag?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
};

const ExpandableContainer = ({
  isExpanded,
  tag = 'div',
  children,
  ...props
}: ExpandableContainerProps) => {
  // For enabling smooth transition
  const [wrapperHeight, setWrapperHeight] = React.useState(0);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (wrapperRef.current) {
      setWrapperHeight(wrapperRef.current.clientHeight);
    }
  });

  return (
    <Wrapper
      as={tag}
      {...props}
      ref={wrapperRef}
      $isExpanded={isExpanded}
      $wrapperHeight={wrapperHeight}
    >
      {children}
    </Wrapper>
  );
};

export default ExpandableContainer;

type WrapperProps = {
  $isExpanded?: boolean;
  $wrapperHeight: number;
};

const Wrapper = styled.section<WrapperProps>`
  max-height: ${(props) =>
    props.$isExpanded ? props.$wrapperHeight + 200 : 0}px;
  overflow: hidden;
  transition: all 0.25s ease;
`;
