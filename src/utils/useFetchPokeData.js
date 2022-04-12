import { useEffect, useState } from "react";

export default function UsefetchPokeData(url) {
    const [pokeData, setPokeData] = useState({
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return pokeData;
}
