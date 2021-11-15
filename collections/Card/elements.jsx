import styled, { css } from "styled-components";

export const CardContainer = styled(({...props}) => <div  {...props}/>)`
    display: flex;
    align-self: flex-start;
    align-items: center;
    height: auto;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
    border: 2px solid transparent;


    ${ props => props.bgColor === 0 && css`
        width: 90%;
        background-color: ${({ theme }) => theme.grayF0};
    `}
    ${ props => props.bgColor === 1 && css`
        width: 95%;
        background-color: ${({ theme }) => theme.grayEA};
    `}
    ${ props => props.bgColor === 2 && css`
        width: 100%;
        background-color: ${({ theme }) => theme.grayE2};
    `}

    &:hover {
        border: 2px solid  ${({ theme }) => theme.main};
    }
`;

