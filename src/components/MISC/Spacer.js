import styled from "styled-components";




const handleSize = ( size ) => {
  switch (size) {
    case "extra-extra-extra-small":
      return "var(--space-3xs)";
    case "extra-extra-small":
      return "var(--space-2xs)";
    case "extra-small":
      return "var(--space-xs)";
    case "small":
      return "var(--space-s)";
    case "medium":
      return "var(--space-m)";
    case "large":
      return "var(--space-l)";
    case "xlarge":
      return "var(--space-xl)";
    case "2xlarge":
      return "var(--space-2xl)";
    case "3xlarge":
      return "var(--space-3xl)";
    case "4xlarge":
      return "var(--space-4xl)";

    case "3xs":
      return "var(--space-3xs)";
    case "2xs":
      return "var(--space-2xs)";
    case "xs":
      return "var(--space-xs)";
    case "s":
      return "var(--space-s)";
    case "m":
      return "var(--space-m)";
    case "l":
      return "var(--space-l)";
    case "xl":
      return "var(--space-xl)";
    case "2xl":
      return "var(--space-2xl)";
    case "3xl":
      return "var(--space-3xl)";
    case "4xl":
      return "var(--space-4xl)";

    default:
      return "var(--space-xs)";
  }
};

// export const Spacer = styled.div`
//   height: ${( { size } ) => handleSize( size )};
// `;

export const Spacer = styled.span`
  border: none;
  display: block;
  height: ${( { size } ) => handleSize( size )};
`;
