import Image from "next/image";
import { Card } from '~/collections';


import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardTitle,
  StyledCardDescription,
  StyledIconImage,
  StyledArticleSection,
  StyledPost,
  StyledCardText
} from "./elements";



export const Main = ({ image, card, title, description, ...props}) => {
    return (
        <>
        <StyledContainer {...props}>
            <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledArticleSection>
                <StyledImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height}/>
                </StyledImageContainer>
                <StyledPost>
                    {card.map(item => (
                        <Card {...props}>
                            <StyledIconImage>
                                <Image layout="responsive" src={item.image.src} width={item.image.width} height={item.image.height}/>
                            </StyledIconImage>
                            <StyledCardText>
                                <StyledCardTitle>{item.title}</StyledCardTitle>
                                <StyledCardDescription>{item.desc}</StyledCardDescription>
                            </StyledCardText>
                        </Card>
                    ))}
                </StyledPost>
            </StyledArticleSection>
        </StyledContainer>
    </>
    );
}