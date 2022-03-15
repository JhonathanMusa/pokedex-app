import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styled";

type PokemonProps = {
    url: string;
};

type PokemonData = {
    name: string;
    sprites: {
        front_default: string;
    };
};

export const Card = (props: PokemonProps) => {
    const { url } = props;
    const [pokeData, setPokeData] = useState<PokemonData>({
        name: "",
        sprites: {
            front_default: "",
        },
    });

    const fetchPokemonData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setPokeData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemonData();
    }, []);
    return (
        <CardContainer>
            <p>{pokeData.name}</p>
            <Link to={"/details/" + pokeData.name}>
                <img
                    src={
                        pokeData.sprites.front_default !== null || undefined
                            ? pokeData.sprites.front_default
                            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Falemautos.com.co%2Fthemes%2Fdemo2%2Fassets%2Fimages%2F&psig=AOvVaw29NSyU6ouMEjHeNhJE-Sg8&ust=1645479073167000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCHtLGdj_YCFQAAAAAdAAAAABAO"
                    }
                    alt={pokeData.name}
                />
            </Link>
        </CardContainer>
    );
};
