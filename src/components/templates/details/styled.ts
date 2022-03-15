import styled from "styled-components";

export const DetailsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    // height: 90vh;
    // justify-content: center;
    width: 100%;

    img {
        height: 200px;
    }

    p {
        font-weight: bold;
        text-align: left;
        padding: 0;
        margin: 10px;
    }
`;

export const Pokename = styled.h3`
    font-size: 2rem;
    text-transform: capitalize;
    padding: 0;
    margin-bottom: 0;
`;
