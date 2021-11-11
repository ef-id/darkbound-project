import Image from "next/image";
import { Card } from "~/collections";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardTitle,
  StyledCardDescription,
  StyledIconImage,
  StyledSubSection,
  StyledCardContainer,
  StyledCardText,
  StyledBackgroundImgContainer,
} from "./elements";

export const Main = ({ backgroundImg, image, card, title, description, ...props }) => {
  return (
    <>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <StyledSubSection>
          <StyledImageContainer>
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImageContainer>
          <StyledCardContainer>
            {card.map((item, index) => (
              <Card key={index} {...props}>
                <StyledIconImage>
                  <Image
                    layout="responsive"
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </StyledIconImage>
                <StyledCardText>
                  <StyledCardTitle>{item.title}</StyledCardTitle>
                  <StyledCardDescription>{item.desc}</StyledCardDescription>
                </StyledCardText>
              </Card>
            ))}
          </StyledCardContainer>
        </StyledSubSection>
        <StyledBackgroundImgContainer>
          <Image
            layout="responsive"
            src={backgroundImg.src}
            alt={backgroundImg.alt}
            width={backgroundImg.width}
            height={backgroundImg.height}
          />
        </StyledBackgroundImgContainer>
      </StyledContainer>
    </>
  );
};
