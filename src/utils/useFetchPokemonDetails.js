import { useEffect, useState } from "react";

export default function UseFetchPokemonDetails(name) {
    const [pokeDetails, setPokeDetails] = useState({
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
            setPokeDetails(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return pokeDetails;
}
