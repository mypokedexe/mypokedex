import Error from "../components/Error.js"
import Pokemons from "../components/Pokemons.js"
const GetPokemons = async(url)=>{
    try {
        const $PokemonBox = document.createElement('section')
        $PokemonBox.classList.add('pokemons__box')
        let res = await fetch(url||'https://pokeapi.co/api/v2/pokemon')
        if(!res.ok) throw res.status
        let json = await res.json()
        console.log(json)
        for (let i = 0; i < json.results.length; i++) {
            const el = json.results[i];
            try {
                let res = await fetch(el.url)
                if(!res.ok) throw res.status
                let json = await res.json()
                $PokemonBox.appendChild(Pokemons({
                    name:json.name,
                    image:json.sprites.front_default,
                    number:json.order,
                    type:json.types[0].type.name
                }))
            } catch (err) {
                $PokemonBox.appendChild(Error({status:err,msg:'Lo siento hubo un error al recuperar los pokemones'}))
            }
        }
        let next = document.querySelector('.fa-arrow-right')
        let previous = document.querySelector('.fa-arrow-left')

        next.dataset.link = json.next !== null ?json.next : null
        previous.dataset.link = json.previous !== null ?json.previous : null

        return $PokemonBox
    } catch (err) {
        $PokemonBox.appendChild(Error({status:err,msg:'Lo siento hubo un error al recuperar los pokemones'}))
    }
}
export default GetPokemons