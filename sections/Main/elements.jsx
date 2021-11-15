import styled from "styled-components";


import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
  SectionInnerHeading,
  SectionParagraph,
} from "~/components";

export const StyledContainer = styled(({height, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-wrap: wrap;
  width: 100%;
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

  @media only screen and (min-width: 2560px) {
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 341px) and (max-width: 580px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 340px) {
    font-size: 1.2rem;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin-bottom: 2rem;
  margin-top: 0;

  @media only screen and (min-width: 2560px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 341px) and (max-width: 580px) {
    font-size: 0.8rem;
    line-height: 0;
  }

  @media only screen and (max-width: 340px) {
    font-size: 0.7rem;
    line-height: 0;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 50%;
  width: 20rem;

  @media only screen and (min-width: 2560px) {
    width: 40rem;
    height: auto;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 14rem;
  }
`;

export const StyledCardTitle = styled((props) => <SectionInnerHeading {...props} />)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 1rem;

  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
  
  @media only screen and (min-width: 2560px) {
    font-size: 1.8rem;
    line-height: 2.5rem;
    padding-top: 1.5rem;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 0.8rem;
  }
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
  font-size: 0.85rem;
  margin-top: 0;
  padding-right: 1rem;

  @media only screen and (min-width: 2560px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    padding-bottom: 1.5rem;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    font-size: 0.6rem;
    line-height: 1rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 0.55rem;
    line-height: 1rem;
  }
`;

export const StyledIconImage = styled(({ ...props }) => <div {...props} />)`
  max-width: 2.5rem;
  max-height: 2.5rem;
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  margin: auto 0;

  @media only screen and (min-width: 2560px) {
    max-width: 3.5rem;
    max-height: 3.5rem;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    max-width: 2rem;
    max-height: 2rem;
    padding: 2rem 2rem;
  }

  @media only screen and (max-width: 580px) {
    max-width: 2rem;
    max-height: 2rem;
    padding: 2rem 2rem;
  }
`;

export const StyledSubSection = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media only screen and (min-width: 2560px) {
    width: 80%;
    height: 100%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 60%;
  }

  @media only screen and (max-width: 1023px) {
    flex-wrap: wrap;
    width: 60%;
  }

  @media only screen and (min-width: 769px) and (max-width: 980px) {
    width: 75%;
  }

  @media only screen and (min-width: 501px) and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1rem;
  margin-left: 3rem;
  width: 45%;
  
  @media only screen and (min-width: 2560px) {
    width: 42%;
    height: 90vh;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 50%;
  }

  @media only screen and (max-width: 1023px){
    dispay: flex;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
  }

  @media only screen and (min-width: 851px) and (max-width: 985px) {
    width: 60%;
  }

  @media only screen and (min-width: 680px) and (max-width: 850px) {
    width: 70%;
  }

  @media only screen and (min-width: 581px) and (max-width: 679px) {
    width: 80%;
  }

  @media only screen and (min-width: 421px) and (max-width: 580px) {
    width: 70%;
  }

  @media only screen and (min-width: 373px) and (max-width: 420px) {
    width: 80%;
  }

  @media only screen and (min-width: 341px) and (max-width: 372px) {
    width: 90%;
  }

  @media only screen and (max-width: 340px){
    width: 93%;
  }
}
`;

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

export const StyledBackgroundImgContainer = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  z-index: -1;
  width: 99%;
  height: 70%;
  margin-top: 2rem;

  
  @media only screen and (min-width: 2560px) {
    width: 90%;
    height: 100%;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1500px){
    width: 90%;
    height: 80%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 100%;
    height: 60%;
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 580px) {
    height: 50%;
    top: 33rem;
  }
`;

export const Container = styled(({ ...props }) => <div {...props} />)`
  width: 100vw;
  height: 90%;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 2560px) {
    width: 100vw;
    height: 100%;
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`;
