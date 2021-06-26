export const LookPokemon = (SkillsDescription )=>{
    let {name,imageUrl,Altura,Categoria,Peso,Habilidad,Sexo,Tipo} = SkillsDescription
    const body = document.querySelector('body') 
    const Fragment = document.createDocumentFragment()
    const $pokemonBoxActive = document.createElement('section')
    const $arrowActive = document.createElement('i')
    const $pokemonImage = document.createElement('img')
    const $pokemonImageShadow = document.createElement('section')
    const $pokemonActive = document.createElement('section')
    const $pokemonNameBoxActive = document.createElement('article')
    const $pokemonNameActive = document.createElement('p')
    const $pokemonDescriptionActive = document.createElement('article')
    const $pokemonListDescription = document.createElement('ul')
    const SkillsName = [
        'Altura',
        'Categoría',
        'Peso',
        'Habilidad',
        'Sexo',
        '',
        'Tipo'
    ]

    SkillsName.forEach(el => {
        const $pokemonListDescriptionItem = document.createElement('li')
        const $pokemonListDescriptionItemTitle = document.createElement('p')
        const $pokemonListDescriptionItemDescription  = document.createElement('p')
        $pokemonListDescriptionItemTitle.textContent = el
        $pokemonListDescriptionItem.classList.add('pokemon__list__description__item')
        $pokemonListDescriptionItemTitle.classList.add('pokemon__list__desctiption__item__title')
        $pokemonListDescriptionItemDescription.classList.add('pokemon__list__desctiption__item__description')

        switch (el) {
            case 'Altura':
                $pokemonListDescriptionItemDescription.textContent = Altura
                break;
                
            case 'Categoría':
                $pokemonListDescriptionItemDescription.textContent = Categoria
            break;

            case 'Peso':
                $pokemonListDescriptionItemDescription.textContent = Peso
            break;
            
            case 'Habilidad':
                $pokemonListDescriptionItemDescription.textContent = Habilidad
            break;

            case 'Sexo':
                $pokemonListDescriptionItemDescription.textContent = Sexo
            break;
        
            default:
            break;
        }
        
        $pokemonListDescriptionItem.appendChild($pokemonListDescriptionItemTitle)
        $pokemonListDescriptionItem.appendChild($pokemonListDescriptionItemDescription)
        $pokemonListDescription.appendChild($pokemonListDescriptionItem)
    });

    $pokemonImage.src = imageUrl
    $pokemonNameActive.textContent = name

    
    $pokemonBoxActive.classList.add('pokemon__box__active')
    $pokemonBoxActive.classList.add('pokemon__box__active__enabled')
    $arrowActive.classList.add('fas','fa-arrow-left','arrow__active')
    $pokemonImage.classList.add('pokemon__image__active')    
    $pokemonImageShadow.classList.add('shadow__image')
    $pokemonActive.classList.add('pokemon__active')
    $pokemonNameBoxActive.classList.add('pokemon__name__box__active')
    $pokemonNameActive.classList.add('pokemon__name__active')
    $pokemonDescriptionActive.classList.add('pokemon__description__active')
    $pokemonListDescription.classList.add('pokemon__list__description')

    $pokemonBoxActive.appendChild($arrowActive)
    $pokemonBoxActive.appendChild($pokemonImage)
    $pokemonBoxActive.appendChild($pokemonImageShadow)
    $pokemonActive.appendChild($pokemonNameBoxActive)
    $pokemonNameBoxActive.appendChild($pokemonNameActive)
    $pokemonActive.appendChild($pokemonDescriptionActive)
    $pokemonDescriptionActive.appendChild($pokemonListDescription)
    $pokemonBoxActive.appendChild($pokemonActive)
    Fragment.appendChild($pokemonBoxActive)
    body.appendChild(Fragment)

    const $ItemType = document.querySelectorAll('.pokemon__list__description__item')

    let TypeOne = Tipo[0] 
    let TypeTwo= Tipo[1]
    let Types =  []
    Types.push(TypeOne,TypeTwo)

    const $pokemonType = document.createElement('article')
    $pokemonType.classList.add('pokemon__type')
    Types.forEach((el)=>{
        const $pokemonTypeBox = document.createElement('div')
        const $pokemonTypeText = document.createElement('p')
        $pokemonTypeText.textContent = el

        $pokemonTypeBox.classList.add('pokemon__type__box')
        $pokemonTypeText.classList.add('pokemon__type__text')
        $pokemonTypeBox.appendChild($pokemonTypeText)
        $pokemonType.appendChild($pokemonTypeBox)
    })

    $ItemType[6].appendChild($pokemonType)
}