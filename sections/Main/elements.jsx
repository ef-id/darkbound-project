import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin-bottom: 0;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin-top: 0.5em;
  line-height: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  margin-top: 7rem;
  max-width: 25rem;
  max-height: 50rem;
  width: 100%;
  height: 100%;
`;