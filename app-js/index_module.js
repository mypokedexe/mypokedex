import { LookPokemon } from "./look_pokemon.js";
let $next  = document.querySelector('#arrow-rigth')
let $previous  = document.querySelector('#arrow-left')
let endpoinOne = 'https://pokeapi.co/api/v2/pokemon/'
let $main = document.querySelector('main')
const GetAllPokemons = async (url)=>{

    try {
        let res = await fetch(url)
        let json =await res.json()

        let next  = json.next === null ? '' : json.next
        let previous  = json.previous === null ? '' : json.previous
        $next.dataset.link = next
        $previous.dataset.link = previous
    } catch (err) {
    }
}
document.addEventListener('DOMContentLoaded',(e)=>GetAllPokemons(endpoinOne))