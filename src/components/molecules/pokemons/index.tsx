import React from "react";
import UseFetchPokemons from "src/utils/useFetchPokemons";
import { Card } from "../card";
import { PokeApiReturn } from "../types";
import { PokemonsContainer } from "./styled";

export const Pokemons = (): JSX.Element => {
    const pokeData = UseFetchPokemons();

    return (
        <PokemonsContainer>
            {pokeData.map((poke: PokeApiReturn, index) => (
                <div key={index + 1}>
                    <Card url={poke.url} />
                </div>
            ))}
        </PokemonsContainer>
    );
};
