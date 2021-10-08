const Pokemons = props =>{
    const $PokemonBox = document.createElement('article')
    const $Pokemon = document.createElement('article')
    const $PokemonImage =document.createElement('img')
    const $PokemonName =document.createElement('p')
    const $PokemonData =document.createElement('div')
    const $PokemonNumber =document.createElement('p')
    const $PokemonType =document.createElement('p')
    const $PokemonSee = document.createElement('div')
    
    $PokemonBox.classList.add('pokemon__box')
    $Pokemon.classList.add('pokemon')
    $PokemonImage.classList.add('pokemon__image')
    $PokemonName.classList.add('pokemon__name')
    $PokemonNumber.classList.add('pokemon__number')
    $PokemonType.classList.add('pokemon__type')
    $PokemonSee.classList.add('pokemon__see')
    $PokemonImage.src= props.image
    $PokemonName.textContent= props.name
    $PokemonNumber.textContent= props.number
    $PokemonType.textContent= props.type
    $PokemonSee.dataset.name= props.name

    $Pokemon.appendChild($PokemonImage)
    $Pokemon.appendChild($PokemonName)
    $PokemonData.appendChild($PokemonNumber)
    $PokemonData.appendChild($PokemonType)
    $Pokemon.appendChild($PokemonData)
    $PokemonBox.appendChild($Pokemon)
    $PokemonBox.appendChild($PokemonSee)
    return $PokemonBox
}
export default Pokemons