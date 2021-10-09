import Error from "../components/Error.js"
import Pokemon from "../components/Pokemon.js"
const GetPokemon =async ()=>{
    const $PokemonBox = document.createElement('section')
    try {
        let pokemonGet = location.hash.substring(10) 
        const $Back = document.createElement('i')
        $PokemonBox.classList.add('only-pokemon-box')
        $Back.classList.add('back-pokemon-icon','fas','fa-arrow-left')
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonGet}`)
        if(!res.ok)throw res.status
        let json = await res.json()
        console.log(json);
        $PokemonBox.appendChild($Back)
        $PokemonBox.appendChild(Pokemon({
            image:json.sprites.front_default,
            name:json.name,
            data:{
                height:json.height,
                weight:json.weight,
                sex:[
                    `<i class="fas fa-venus"></i>`,
                    `<i class="fas fa-mars"></i>`
                ],
                id:json.id,
                experience:json.base_experience,
            },
            type:json.types,
        }))

    } catch (err) {
        $PokemonBox.appendChild(Error({status:err,msg:'Lo siento hubo un error al recuperar el pokemon'}))
    }
    return $PokemonBox

}
export default GetPokemon