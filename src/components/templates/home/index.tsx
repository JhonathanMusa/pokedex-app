import React from "react";
import { Pokemons } from "src/components/molecules/pokemons";
import { Layout } from "src/components/organisms/layout";

const Home = (): JSX.Element => {
    return (
        <Layout>
            <Pokemons />
        </Layout>
    );
};

export default Home;
