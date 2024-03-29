import React from 'react';
import styled from 'styled-components';

type FilterButtonProps = ButtonWithLabel | ButtonWithChildrenAsLabel;

const FilterButton = ({
  label,
  icon,
  children,
  ...props
}: FilterButtonProps) => {
  return (
    <Button {...props}>
      {label}
      {children}

      <IconContainer>{icon}</IconContainer>
    </Button>
  );
};

export default FilterButton;

type ButtonProps = {
  $active?: boolean;
};

const Button = styled.button<ButtonProps>`
  --color: hsl(var(--color-primary));
  --bg-color: hsl(var(--color-white));
  --hover-color: hsl(var(--color-off-white));

  max-width: 100%; // Grow with parent width
  padding-block: 1.125rem;
  padding-inline: 1.25rem;
  color: var(--color);
  background-color: var(--bg-color);
  text-align: left;
  font-weight: var(--font-weight-medium);
  cursor: pointer;

  &:hover {
    background-color: var(--hover-color);
  }

  // Remove default styles
  border: none;
  border-color: transparent;
`;

const IconContainer = styled.span`
  float: right;

  & svg {
    display: inline-block;
    vertical-align: bottom;
    color: hsl(var(--color-gray-400));
    fill: hsl(var(--color-gray-400));
  }
`;

interface BasicButton {
  icon: React.ReactNode;
  onClick: () => void;
}

interface ButtonWithLabel extends BasicButton {
  label: React.ReactNode;
  children?: never;
}

interface ButtonWithChildrenAsLabel extends BasicButton {
  children: React.ReactNode;
  label?: never;
}
