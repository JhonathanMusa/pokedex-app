import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

export const Header = (): JSX.Element => {
    return (
        <HeaderContainer>
            <Link to="/">
                <img
                    src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png"
                    alt="brand logo"
                />
                Pokedex App
            </Link>
            <Link to="/about">About App</Link>
        </HeaderContainer>
    );
};
