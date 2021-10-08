import App from "./App.js";
document.addEventListener('DOMContentLoaded',(e)=>App())
window.addEventListener('hashchange',(e)=>App())
document.addEventListener('click',(e)=>{
    if(e.target.matches('.pokemon__see')){
        location.hash = `#/pokemon/${e.target.dataset.name}`
    }
})