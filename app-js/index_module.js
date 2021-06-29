import { LookPokemon } from "./look_pokemon.js";
let $next  = document.querySelector('#arrow-rigth')
let $previous  = document.querySelector('#arrow-left')
let endpoinOne = 'https://pokeapi.co/api/v2/pokemon/'
let $main = document.querySelector('main')
const GetAllPokemons = async (url)=>{

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
                console.log(`${err.status} Ocurrio un Error`);
            }
        }


        $main.innerHTML = $template
        let next  = json.next === null ? '' : json.next
        let previous  = json.previous === null ? '' : json.previous
        $next.dataset.link = next
        $previous.dataset.link = previous
    } catch (err) {
    }
}
document.addEventListener('DOMContentLoaded',(e)=>GetAllPokemons(endpoinOne))
document.addEventListener('click',(e)=>{
    if(e.target.matches('.arrow')){
        e.preventDefault()
        if(e.target.dataset.link === ''){
        }else{
            GetAllPokemons(e.target.dataset.link)
        }
    }
})