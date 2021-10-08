import Header from "./components/Header.js"
import GetPokemon from "./helpers/get_pokemon.js"
import GetPokemons from "./helpers/get_pokemons.js"
const Router =async ()=>{
    const $DynamicContent = document.getElementById('dynamic-content')
    $DynamicContent.innerHTML = ''
    let {hash}=location
    if(hash === '#/home'|| hash === ''){
        $DynamicContent.insertAdjacentElement('beforebegin',Header())
        $DynamicContent.appendChild(await GetPokemons())
    }else if(hash.includes('#/pokemon')){
        $DynamicContent.appendChild(await GetPokemon())        
    }else{
        // erro page 404
    }
}
export default Router