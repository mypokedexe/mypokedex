import Header from "./components/Header.js"
import GetPokemons from "./helpers/get_pokemons.js"
const Router =async ()=>{
    const $DynamicContent = document.getElementById('dynamic-content')
    $DynamicContent.innerHTML = ''
    let {hash}=location
    if(hash === '#/home'|| hash === ''){
        $DynamicContent.insertAdjacentElement('beforebegin',Header())
        $DynamicContent.appendChild(await GetPokemons())
    }else if(hash.includes('#/pokemon')){
        $DynamicContent.innerHTML = `<h1 class="">Hello world</h1>`        
    }else{
        // erro page 404
    }
}
export default Router