import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #4f4d8c;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
        color: #fff;
        text-decoration: none;
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 1px 1px 1px #000 ;

        &:hover{
            color: #333;
        }

    }
`;
