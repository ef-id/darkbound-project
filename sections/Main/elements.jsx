import styled from "styled-components";
import { SectionContainer, SectionHeading, SectionSubheading, SectionInnerHeading, SectionParagraph } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  flex-wrap: wrap;  
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
  position: relative;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin-bottom: 0;

  @media only screen and (max-width: 600px){
    font-size: 6vw;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin-bottom: 2rem;
  margin-top: 0;

  @media only screen and (max-width: 600px){
    font-size: 3.5vw;
    line-height: 0;
  }
  
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20rem;
  max-height: auto;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1023px){
    width: 100%;
  }
`;

export const StyledCardTitle = styled((props) => <SectionInnerHeading {...props} />)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }

  @media only screen and (max-width: 1023px){
    font-size: 90%;
  }
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
  font-size: 0.85rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-right: 1.5rem;

  @media only screen and (max-width: 1023px){
    font-size: 80%;
  }
`;

export const StyledIconImage = styled(({ ...props }) => <div {...props} />)`
  max-width: 2.5rem;
  max-height: 2.5;
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
`

export const StyledSubSection = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 50%;

  @media only screen and (min-width: 1400px){
    dispay: flex;
    width: 55%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px){
    dispay: flex;
    width: 77%;
  }

  @media only screen and (max-width: 1023px){
    dispay: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 75%
  }

  @media only screen and (max-width: 768px){
    dispay: flex;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
  }

  @media only screen and (max-width: 660px){
    width: 100%;
  }
`

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 1rem;
  width: 50%;


  @media only screen and (max-width: 1023px){
    dispay: flex;
    align-items: center;
    width: 65%;
    margin: 1rem 0;
  }

  @media only screen and (max-width: 768px){
    dispay: flex;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
  }

  @media only screen and (max-width: 660px){
    dispay: flex;
    align-items: center;
    width: 90%;
    margin: 1rem 0;
  }

  @media only screen and (max-width: 660px){
    width: 100%;
    margin: 1rem 0;
  }
}
`

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`

export const StyledBackgroundImgContainer = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  z-index: -1;
  max-width: 100%;
  width: 100%;
  height: auto;
  top: 12rem;
`

