import App from "./App.js";
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
        if(e.target.dataset.link !== 'null'){
            $DynamicContent.innerHTML = ''
            $DynamicContent.appendChild(await GetPokemons(e.target.dataset.link))
        }
    }
})