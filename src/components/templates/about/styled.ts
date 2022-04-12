import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
        list-style-type: none;
    }
`;

export const AboutTitle = styled.h1`
    font-size: 30px;
    margin: 10px;
`;

export const AboutParagraph = styled.p`
    font-size: 20px;
    margin: 5px 10px;
`;

export const AboutSubtitle = styled.h2`
    padding-bottom: 10px;
`;

export const AboutList = styled.ul`

    li {
        padding: 5px;
    }
`;
