import App from "./App.js";
import LoaderPokemon from "./components/Loader_pokemons.js";
import GetPokemons from "./helpers/get_pokemons.js";
document.addEventListener('DOMContentLoaded',(e)=>App())
window.addEventListener('hashchange',(e)=>App())
document.addEventListener('click',async(e)=>{
    if(e.target.matches('.pokemon__see')){
        location.hash = `#/pokemon/${e.target.dataset.name}`
    }
    if(e.target.matches('.pagination__link')||e.target.matches('.pagination__icon')){
        e.preventDefault()
        const $DynamicContent = document.getElementById('dynamic-content')
        const $LoaderPokemon = document.createElement('div')
        $LoaderPokemon.appendChild(LoaderPokemon())
        if(e.target.dataset.link !== 'null'){
            $DynamicContent.innerHTML = ''
            $DynamicContent.appendChild($LoaderPokemon)
            $DynamicContent.appendChild(await GetPokemons(e.target.dataset.link))
            $DynamicContent.removeChild($LoaderPokemon)
        }
    }
    if(e.target.matches('.back-pokemon-icon')){
        location.hash = '#/home'
    }
})
document.addEventListener('submit',(e)=>{
    if(e.target.matches('form')){
        e.preventDefault()
        location.hash = `#/pokemon/${e.target['pokemon-name'].value.toLowerCase()}` 

    }
})