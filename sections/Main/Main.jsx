import Image from "next/image";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
} from "./elements";

export const Main = ({ image, title, description, ...props}) => {
    return (
        <>
        <StyledContainer {...props}>
            <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledImageContainer>
                <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height}/>
            </StyledImageContainer>
        </StyledContainer>
        
    </>
    );
}