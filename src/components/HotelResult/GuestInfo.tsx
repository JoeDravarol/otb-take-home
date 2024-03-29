import styled from 'styled-components';
import pluralize from 'pluralize';

type GuestInfoProps = {
  adults: number;
  children?: number;
  infants?: number;
};

const GuestInfo = ({ adults, children, infants }: GuestInfoProps) => {
  const ONLY_ADULTS = !children && !infants;
  const HAS_CHILD = Boolean(children);
  const HAS_INFANT = Boolean(infants);

  if (ONLY_ADULTS) {
    return (
      <>
        <Bold>{adults}</Bold> {pluralize('Adult', adults)}
      </>
    );
  }

  if (HAS_CHILD && !HAS_INFANT) {
    return (
      <>
        <Bold>{adults}</Bold> {pluralize('Adult', adults)},{' '}
        <Bold>{children}</Bold> {pluralize('children', children)}
      </>
    );
  }

  if (HAS_INFANT && !HAS_CHILD) {
    return (
      <>
        <Bold>{adults}</Bold> {pluralize('Adult', adults)},{' '}
        <Bold>{children}</Bold> {pluralize('infant', children)}
      </>
    );
  }

  return (
    <>
      <Bold>{adults}</Bold> {pluralize('Adult', adults)},{' '}
      <Bold>{children}</Bold> {pluralize('children', children)} &{' '}
      <Bold>{infants}</Bold> {pluralize('infant', infants)}
    </>
  );
};

export default GuestInfo;

const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;
