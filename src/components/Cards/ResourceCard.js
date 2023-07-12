import styled, { useTheme } from 'styled-components';




export default function ResourceCard( { id, slug, title, description, useages } ) {
  const { color } = useTheme();

  return (
    <a href = {slug} ref = {id} >
      <ResourceCardContainer >
        <ResourceCardTitle >{title}</ResourceCardTitle >
        <ResourceCardDescription >{description}</ResourceCardDescription >
        <ResourceCardUseages >
          {useages && useages.map( ( useage ) => (
            <li key = {useage} style = {{ marginRight: 'var(--space-xs)' }} >
              {useage}
            </li >
          ) )}
        </ResourceCardUseages >
      </ResourceCardContainer >
    </a >
  );

}


const ResourceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  border-radius: var(--radius);
  box-shadow: 0 0 0 1px var(--color-border);
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 0 2px var(--color-border);
  }

  & > *:not(:last-child) {
    margin-bottom: var(--space-md);
  }
`;


const ResourceCardTitle = styled.h3`
  color: var(--color-primary);
  font-size: var(--font-size-lg);
`;


const ResourceCardDescription = styled.p`
  color: var(--color-text);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
`;

const ResourceCardUseages = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: var(--space-md);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  color: var(--color-text);
  list-style: none;
`;
