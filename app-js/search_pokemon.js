import { ErrorFuntionSearch } from "./error.js";
export const SearchPokemon =( )=>{
    const $FORM = document.querySelector('form') 
    const InserPokemon = async (endPoint)=>{
        try {
            let res = await fetch(endPoint)
            let json = await res.json()

            if(!res.ok) throw res

            let $templateSearch = ''
            let alturaData = json.height / 10
            let pesoData = json.weight / 10
            let typeOne = json.types[0] === undefined ? ' ' :  json.types[0].type.name
            let typeTwo = json.types[1] === undefined ? ' ' :  json.types[1].type.name

            $templateSearch += `
            <section class="pokemon__box__active pokemon__box__active__enabled">
                <i class="arrow__active fas fa-arrow-left"></i>
                <img src="${json.sprites.front_default}" alt="${json.name}" class="pokemon__image__active">
                <section class="shadow__image"></section>
                
                <section class="pokemon__active">
                    <article class="pokemon__name__box__active">
                        <p class="pokemon__name__active">${json.name}</p>
                    </article>

                    <article class="pokemon__description__active">
                        <ul class="pokemon__list__description">
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">Height</p>
                                <p class="pokemon__list__desctiption__item__description">${alturaData} m</p>
                            </li>
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">ID</p>
                                <p class="pokemon__list__desctiption__item__description">${json.id}</p>
                            </li>
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">Weight</p>
                                <p class="pokemon__list__desctiption__item__description">${pesoData} kg</p>
                            </li>
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">Experience</p>
                                <p class="pokemon__list__desctiption__item__description">${json.base_experience}</p>
                            </li>
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">Sex</p>
                                <p class="pokemon__list__desctiption__item__description">
                                    <i class="sex__icon__active fas fa-venus"></i>
                                    <i class="sex__icon__active fas fa-mars"></i>
                                </p>
                            </li>
                            <li class="pokemon__list__description__item"></li>
                            <li class="pokemon__list__description__item">
                                <p class="pokemon__list__desctiption__item__title">Type</p>
                                <article class="pokemon__type">
                                    <div class="pokemon__type__box">
                                        <p class="pokemon__type__text">${typeOne}</p>
                                    </div>
                                    <div class="pokemon__type__box">
                                        <p class="pokemon__type__text">${typeTwo}</p>
                                    </div>
                                </article>

                            </li>
                        </ul>
                    </article>
                </section>
            </section>
            ` 

            let lookPokemon = document.querySelector('#look-pokemon')
            lookPokemon.innerHTML = $templateSearch
            let boxPokemon = document.querySelector('.pokemon__box__active')
            boxPokemon.classList.remove('pokemon__box__active__enabled')
        } catch (err) {
            ErrorFuntionSearch()            
        }
    }
    
    document.addEventListener('submit',(e)=>{
        if(e.target === $FORM){
            e.preventDefault()
        }
    })
    document.addEventListener('keydown',(e)=>{
        if(e.target === $FORM.search && e.key === 'Enter'){
            let $pokemonName = $FORM.search.value.toLowerCase()            
            InserPokemon(`https://pokeapi.co/api/v2/pokemon/${$pokemonName}/`)
        }
    })
}