import styled from "styled-components";

export const CardContainer = styled.div`
    width: 200px;
    // padding: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0px 10px 13px -7px #000000,
            5px 5px 15px 5px rgba(0, 0, 0, 0);
        border-radius: 16px;

        img {
            height: 100px;
            object-fit: cover;
        }
    }

    p {
        padding: 0;
        margin: 0;
        text-transform: capitalize;
        font-size: 2rem;
    }
`;
