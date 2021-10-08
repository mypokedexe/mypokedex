import Router from "./Router.js"
const App = async ()=>{
    const $ROOT = document.getElementById('root')
    const $DynamicContent = document.createElement('section')
    const $loader = document.createElement('div')
    $loader.classList.add('loader')
    $loader.innerHTML=`<img src="public/oval.svg" alt="loader" class="loader__image">`
    $DynamicContent.id = 'dynamic-content' 
    $ROOT.innerHTML = ''
    $ROOT.appendChild($DynamicContent)
    $ROOT.appendChild($loader)
    await Router()
    $ROOT.removeChild($loader)
}
export default App