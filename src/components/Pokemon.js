const Pokemon = props =>{
    const $Pokemon = document.createElement('section')
    const $PokemonImage = document.createElement('img')
    const $PokemonImageShow = document.createElement('div')
    const $PokemonName = document.createElement('p')
    const $PokemonDataBox = document.createElement('article')
    const $PokemonData = document.createElement('ul')
    const $PokemonDataItemType = document.createElement('ul')
    const $PokemonTitleType = document.createElement('p')

    $PokemonImage.alt = props.name
    $PokemonImage.src = props.image
    $PokemonName.textContent = props.name
    $PokemonTitleType.textContent = 'Type'
    $Pokemon.classList.add('only__pokemon')
    $PokemonImage.classList.add('only__pokemon__image')
    $PokemonName.classList.add('only__pokemon__name')
    $PokemonDataBox.classList.add('only__pokemon__data__box')
    $PokemonData.classList.add('only__pokemon__data')
    $PokemonDataItemType.classList.add('only__pokemon__type__list')
    $PokemonImageShow.classList.add('image-pokemon-show')

    $Pokemon.appendChild($PokemonImage)    
    $Pokemon.appendChild($PokemonImageShow)    
    $Pokemon.appendChild($PokemonName)    
    let keyObject = Object.keys(props.data)
    keyObject.forEach(el => {
        const $PokemonDataItem = document.createElement('li')
        const $PokemonDataName = document.createElement('span')
        const $PokemonDataDescription = document.createElement('span')
        $PokemonDataName.textContent = el
        $PokemonDataDescription.innerHTML = `${props.data[el]}` 
        $PokemonDataItem.appendChild($PokemonDataName)
        $PokemonDataItem.appendChild($PokemonDataDescription)
        $PokemonData.appendChild($PokemonDataItem)
    });
    $PokemonDataItemType.appendChild($PokemonTitleType)
    props.type.forEach((el)=>{
        const $PokemonTypeItem = document.createElement('li')
        const $PokemonTypeName = document.createElement('span')
        $PokemonTypeName.textContent = el.type.name
        $PokemonTypeItem.appendChild($PokemonTypeName)
        $PokemonDataItemType.appendChild($PokemonTypeItem)
    })
    $PokemonData.appendChild($PokemonDataItemType)
    $PokemonDataBox.appendChild($PokemonData)    
    $Pokemon.appendChild($PokemonDataBox)    
    return $Pokemon
}
export default Pokemon