import { ErrorFuntion } from "./error.js";
let $next  = document.querySelector('#arrow-rigth')
let $previous  = document.querySelector('#arrow-left')
let $main = document.querySelector('main')
export const GetAllPokemons = async (url)=>{

    try {
        let res = await fetch(url)
        let json =await res.json()

        if(!res.ok) throw res

        let $template = ''

        for (let i = 0; i < json.results.length; i++) {
            const element = json.results[i];
            try {
                let res = await fetch(element.url)                
                let pokemon = await res.json()
              
                $template += `<section class="pokemon__box">
                                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon__image">
                                <section class="pokemon">
                                    <article class="pokemon__name__box">
                                        <p class="pokemon__name">${pokemon.name}</p>
                                    </article>

                                    <article class="pokemon__description">
                                        <div class="pokemon__desctipon__number__box">
                                            <p class="pokemon__description__number">${pokemon.id}</p>
                                        </div>

                                        <div class="pokemon__description__type__box">
                                            <p class="pokemon__description__type">${pokemon.types[0].type.name}</p>
                                        </div>
                                    </article>

                                </section>

                                <section class="pokemon__click" data-pokemon="${pokemon.name}" data-id="${pokemon.id}" ></section>

                            </section>
                `
                if(!res.ok)throw res
            } catch (err) {
                ErrorFuntion({
                    error_number:err.status,
                    error_text:err.statusText
                })
            }
        }


        $main.innerHTML = $template
        let next  = json.next === null ? '' : json.next
        let previous  = json.previous === null ? '' : json.previous
        $next.dataset.link = next
        $previous.dataset.link = previous
    } catch (err) {
        ErrorFuntion({
            error_number:err.status,
            error_text:err.statusText
        })
    }
}
export const FuntionActiveAll = ()=>{
    document.addEventListener('click',async(e)=>{
        if(e.target.matches('.arrow')){
            e.preventDefault()
            if(e.target.dataset.link === ''){
            }else{
                GetAllPokemons(e.target.dataset.link)
            }
        }
        if(e.target.matches('.pokemon__click')){
    
            try {
                let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.dataset.id}/`)
                let json = await res.json()
    
                if(!res.ok) throw res
                
                let $templateTwo = ''
                let alturaData = json.height / 10
                let pesoData = json.weight / 10
                let typeOne = json.types[0] === undefined ? ' ' :  json.types[0].type.name
                let typeTwo = json.types[1] === undefined ? ' ' :  json.types[1].type.name
    
                $templateTwo += `
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
                lookPokemon.innerHTML = $templateTwo
                let boxPokemon = document.querySelector('.pokemon__box__active')
                boxPokemon.classList.remove('pokemon__box__active__enabled')
    
            } catch (err) {
                ErrorFuntion({
                    error_number:err.status,
                    error_text:err.statusText
                })
            }
        }
        if(e.target.matches('.arrow__active')){
            let boxPokemon = document.querySelector('.pokemon__box__active')
            boxPokemon.classList.add('pokemon__box__active__enabled')
        }
    })
}