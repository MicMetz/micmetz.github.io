import { motion }      from 'framer-motion';
import styled          from 'styled-components';
import { breakpoints } from '../constants/breakpoints.js';




export const SectionHeader = styled.h3`
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  display: flex;
  align-items: center;
  margin-bottom: var(--space-3xs);

  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 0px;
    margin-left: var(--space-3xs);
  }

  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-tangerine);
    cursor: pointer;

    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;


export const Subheader = styled.p`
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--color-gray-800);
  margin-bottom: var(--space-m);
`;



export const Title1 = styled( motion.h1 )`
  font-size: var(--font-size-4xl);
  font-family: var(--font-serif);
  line-height: var(--leading-tighter);
  font-weight: ${( props ) => props.fontWeight ? props.fontWeight : 'normal'};
  margin-bottom: var(--space-m);

  max-width: 1200px;

  @media ${breakpoints.mediaMD} {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--space-s);
  }

  @media ${breakpoints.mediaSM} {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--space-s);
  }


`;

export const Title2 = styled( motion.h2 )`
  font-size: calc(var(--font-size-xl) / 1.2);
  font-family: var(--font-serif);
  color: var(--color-gray-800);
  font-weight: 100;
  line-height: var(--leading-tight);
  margin: var(--space-xs) 0 var(--space-2xs);
  transition: all 0.3s ease-in-out;
  @media ${breakpoints.mediaSM} {
    font-size: var(--font-size-lg);
  }
`;

export const SmallTitle2 = styled( motion.h2 )`
  font-family: var(--font-sans);
  font-size: var(--font-size-md);
  color: var(--color-gray-800);
  font-weight: 300;
  line-height: var(--leading-loose);
`;

export const Title3 = styled( motion.h3 )`
  font-size: var(--font-size-lg);
  font-family: var(--font-sans);
  color: var(--color-gray-800);
  line-height: var(--leading-tight);
`;

export const Title4 = styled( motion.h4 )`
  font-size: var(--font-size-md);
  font-family: var(--font-sans);
  color: var(--color-gray-800);
  font-weight: 300;
  line-height: var(--leading-tight);
`;

export const SmallCaps = styled.p`
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  font-weight: 700;
  color: var(--color-black);
  text-transform: uppercase;
  letter-spacing: 0.06rem;
`;

export const Subtext = styled.aside`
  font-size: var(--font-size-sm);
  font-family: var(--font-sans);
  text-align: center;
  color: var(--color-gray-600);
  margin-bottom: var(--space-m);
`;
