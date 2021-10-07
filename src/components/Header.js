const Header = () =>{
    const $Header = document.createElement('header')
    const $HeaderLogoBox = document.createElement('section')
    const $HeaderLogoPokeball = document.createElement('img') 
    const $HeaderLogoImage = document.createElement('img') 
    const $HeaderFormBox = document.createElement('section')
    const $HeaderForm = document.createElement('form')
    const $HeaderFormSearch = document.createElement('input')
    const $HeaderPaginationIconsBox = document.createElement('section')
    const $HeaderPaginationIcons = [`<i class="fas fa-arrow-left pagination__icon"></i>`,`<i class="fas fa-arrow-right pagination__icon"></i>`]
 
    $HeaderFormSearch.type = 'search'
    $HeaderFormSearch.placeholder = 'Buscar Pokémon'
    $HeaderLogoPokeball.src = 'public/pokeball-one.png'
    $HeaderLogoImage.src = 'public/pokedex-logo.png'

    $Header.classList.add('header')
    $HeaderLogoBox.classList.add('header__logo__box')
    $HeaderLogoPokeball.classList.add('header__logo__pokeball')
    $HeaderLogoImage.classList.add('header__logo__image')
    $HeaderFormSearch.classList.add('header__form__search')
    $HeaderFormBox.classList.add('header__form__box')
    $HeaderPaginationIconsBox.classList.add('header__pagination__box')

    $HeaderLogoBox.appendChild($HeaderLogoPokeball)
    $HeaderLogoBox.appendChild($HeaderLogoImage)
    $Header.appendChild($HeaderLogoBox)
    $HeaderForm.appendChild($HeaderFormSearch)
    $HeaderFormBox.appendChild($HeaderForm)
    $HeaderPaginationIcons.forEach((el)=>{
        const $HeaderPaginationLink = document.createElement('a')
        $HeaderPaginationLink.classList.add('pagination__link')
        $HeaderPaginationLink.innerHTML = el        
        $HeaderPaginationIconsBox.appendChild($HeaderPaginationLink)
    })
    $HeaderFormBox.appendChild($HeaderPaginationIconsBox)
    $Header.appendChild($HeaderFormBox)
    return $Header
}
export default Header