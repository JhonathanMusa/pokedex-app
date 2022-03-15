import React, { useEffect, useState } from "react";
import { Card } from "../card";
import { PokemonsContainer } from "./styled";

export const Pokemons = () => {
    const [pokeData, setPokeData] = useState([]);

    const fetchPokemons = async () => {
        try {
            const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
            );
            const { results } = await res.json();
            setPokeData(results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <PokemonsContainer>
            {pokeData.map((poke: any, index) => (
                <div key={index + 1}>
                    <Card url={poke.url} />
                </div>
            ))}
        </PokemonsContainer>
    );
};
