export type PokemonProps = {
    url: string;
};

export type PokemonData = {
    name: string;
    sprites: {
        front_default: string;
    };
};

export type PokeApiReturn = {
    name: string;
    url: string;
};
