import React from "react";
import { Link } from "react-router-dom";
import UsefetchPokeData from "src/utils/useFetchPokeData";
import { PokemonProps } from "../types";
import { CardContainer, CardName } from "./styled";

export const Card = (props: PokemonProps): JSX.Element => {
    const { url } = props;

    const pokeData = UsefetchPokeData(url);

    return (
        <CardContainer>
            <CardName>{pokeData.name}</CardName>
            <Link to={"/details/" + pokeData.name}>
                <img src={pokeData.sprites.front_default} alt={pokeData.name} />
            </Link>
        </CardContainer>
    );
};
