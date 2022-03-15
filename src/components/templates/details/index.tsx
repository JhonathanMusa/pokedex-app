import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "src/components/organisms/layout";
import { DetailsContainer, Pokename } from "./styled";

type PokemonDetails = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
};

const Details = () => {
    const { name } = useParams();
    const [pokeDetails, setPokeDetails] = useState<PokemonDetails>({
        name: "",
        id: 0,
        height: 0,
        weight: 0,
        sprites: {
            front_default: "",
        },
    });

    const fetchPokemonDetails = async () => {
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const data = await res.json();
            console.log(data);
            setPokeDetails(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    return (
        <Layout>
            <DetailsContainer>
                <Pokename>{pokeDetails.name}</Pokename>

                <img
                    src={
                        pokeDetails.sprites.front_default !== null || undefined
                            ? pokeDetails.sprites.front_default
                            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Falemautos.com.co%2Fthemes%2Fdemo2%2Fassets%2Fimages%2F&psig=AOvVaw29NSyU6ouMEjHeNhJE-Sg8&ust=1645479073167000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCHtLGdj_YCFQAAAAAdAAAAABAO"
                    }
                    alt={pokeDetails.name}
                />
                <p>ID: {pokeDetails.id}</p>
                <p>Height: {pokeDetails.height}</p>
                <p>Weight: {pokeDetails.weight}</p>
            </DetailsContainer>
        </Layout>
    );
};

export default Details;
