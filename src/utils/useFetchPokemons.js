import { useEffect, useState } from "react";

export default function UseFetchPokemons() {
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

    return pokeData;
}
