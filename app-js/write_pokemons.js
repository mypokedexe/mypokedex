export const WritePokemons = (dataPokemon )=>{
    let {imagePokemon} = dataPokemon
    
    // CONSTANT CREATE
    const $main = document.querySelector('main')
    const Fragment = document.createDocumentFragment()
    const $pokemonBox = document.createElement('section')
    const $pokemonImage = document.createElement('img')
    const $pokemon = document.createElement('section')
    const $pokemonNameBox = document.createElement('article')
    const $pokemonName = document.createElement('p')
    const $pokemonDescription = document.createElement('article')
    const $pokemonDescriptionNumberBox = document.createElement('div')
    const $pokemonDescriptionNumber = document.createElement('p')
    const $pokemonDescriptionTypeBox = document.createElement('div')
    const $pokemonDescriptionType = document.createElement('p')
    const $pokemonClick = document.createElement('section')

    // CSS CLASS ASSIGNMENT
    $pokemonBox.classList.add('pokemon__box')
    $pokemonImage.classList.add('pokemon__image')
    $pokemon.classList.add('pokemon')
    $pokemonNameBox.classList.add('pokemon__name__box')
    $pokemonName.classList.add('pokemon__name')
    $pokemonDescription.classList.add('pokemon__description')
    $pokemonDescriptionNumberBox.classList.add('pokemon__description__number__box')
    $pokemonDescriptionNumber.classList.add('pokemon__description__number')
    $pokemonDescriptionTypeBox.classList.add('pokemon__description__type__box')
    $pokemonDescriptionType.classList.add('pokemon__desctipiont__type')
    $pokemonClick.classList.add('pokemon__click')
}
