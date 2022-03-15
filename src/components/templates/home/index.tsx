import React, { useEffect, useState } from "react";
import { Card } from "src/components/molecules/card";
import { Pokemons } from "src/components/molecules/pokemons";
import { Layout } from "src/components/organisms/layout";

const Home = () => {
    return (
        <Layout>
            <Pokemons />
        </Layout>
    );
};

export default Home;
