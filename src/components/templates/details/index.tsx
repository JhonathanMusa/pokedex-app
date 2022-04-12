import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "src/components/organisms/layout";
import { DetailsContainer, Pokename } from "./styled";
import UseFetchPokemonDetails from "src/utils/useFetchPokemonDetails";

const Details = (): JSX.Element => {
    const { name } = useParams();

    const pokeDetails = UseFetchPokemonDetails(name);

    return (
        <Layout>
            <DetailsContainer>
                <Pokename>{pokeDetails.name}</Pokename>

                <img
                    src={pokeDetails.sprites.front_default}
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
