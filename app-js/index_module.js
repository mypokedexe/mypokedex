import { SearchPokemon } from "./search_pokemon.js";
import {AnimationPokeball} from "./animation_pokeball.js"
import { GetAllPokemons,FuntionActiveAll } from "./get_and_write_pokemons.js";
let endpoinOne = 'https://pokeapi.co/api/v2/pokemon/'

document.addEventListener('DOMContentLoaded',(e)=>{
    GetAllPokemons(endpoinOne)
    FuntionActiveAll()
    SearchPokemon()
    AnimationPokeball()
})
