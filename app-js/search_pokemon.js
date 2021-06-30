export const SearchPokemon =( )=>{
    const $FORM = document.querySelector('form') 
   
    
    document.addEventListener('submit',(e)=>{
        if(e.target === $FORM){
            e.preventDefault()
        }
    })
}