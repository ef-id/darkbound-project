import styled from "styled-components";

export const CardContainer = styled(({...props}) => <div  {...props}/>)`
    display: flex;
    width: 100%;
    height: auto;
    margin-left: 3rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.grayF0};

    &:hover {
        border: solid 2px ${({ theme }) => theme.main};
    }
`;

