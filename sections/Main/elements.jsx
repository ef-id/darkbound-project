import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading, SectionInnerHeading, SectionParagraph } from "~/components";
import { CardContainer } from "~/collections";

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
  margin-top: 4rem;
  max-width: 20rem;
  max-height: auto;
  width: 60%;
  height: 60%;
`;

export const StyledCardContainer = styled(({...props }) => <CardContainer {...props} />)`
`;

export const StyledCardTitle = styled((props) => <SectionInnerHeading {...props} />)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline
  }
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
  font-size: 0.85rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-right: 4rem;
`;

export const StyledIconImage = styled(({ ...props }) => <div {...props} />)`
  max-width: 2.5rem;
  max-height: 2.5;
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
`

export const StyledArticleSection = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 55%
`

export const StyledPost = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem 0 1rem;
  width: 55%;
  
`

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`