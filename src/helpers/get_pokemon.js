import Pokemon from "../components/Pokemon.js"
const GetPokemon =async ()=>{
    try {
        let pokemonGet = location.hash.substring(10) 
        const $PokemonBox = document.createElement('section')
        const $Back = document.createElement('i')
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

        return $PokemonBox
    } catch (err) {
        // errro al recuperar el pokemon 
    }
}
export default GetPokemon