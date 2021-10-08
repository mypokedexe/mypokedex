const LoaderPokemon = ()=>{
    const $loaderPokemon = document.createElement('div')
    $loaderPokemon.classList.add('loader-pokemons')
    $loaderPokemon.innerHTML =`
        <div class="poinst__container">
            <div class="point point-1"></div>
            <div class="point point-2"></div>
            <div class="point point-3"></div>
            <div class="point point-4"></div>
            <div class="point point-5"></div>
        </div>
    `
    return $loaderPokemon
}
export default LoaderPokemon