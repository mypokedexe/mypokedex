export const AnimationPokeball =( )=>{
    let pokeballs = [
        'resources/images/pokeballs/pokeball-one.png',
        'resources/images/pokeballs/pokeball-two.png',
        'resources/images/pokeballs/pokeball-three.png',
        'resources/images/pokeballs/pokeball-four.png',
        'resources/images/pokeballs/pokeball-five.png',
        'resources/images/pokeballs/pokeball-six.png',
        'resources/images/pokeballs/pokeball-seven.png',
        'resources/images/pokeballs/pokeball-heigth.png',
        'resources/images/pokeballs/pokeball-nine.png',
        'resources/images/pokeballs/pokeball-ten.png',
        'resources/images/pokeballs/pokeball-eleven.png',
        'resources/images/pokeballs/pokeball-twelve.png',
    ]
    let $pokeball = document.querySelector('.logo__pokeball')
    let i = 0
    setInterval(() => {
        i++
        if(i>11){
            i = 0
        }else{
            $pokeball.src = pokeballs[i]
        }
    }, 3000);
}