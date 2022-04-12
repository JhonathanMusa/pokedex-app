import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

export const Header = (): JSX.Element => {
    return (
        <HeaderContainer>
            <Link to="/">Pokedex App</Link>
            <Link to="/about">About App</Link>
        </HeaderContainer>
    );
};
