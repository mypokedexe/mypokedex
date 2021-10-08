import Router from "./Router.js"
const App = async ()=>{
    const $ROOT = document.getElementById('root')
    const $DynamicContent = document.createElement('section')
    const $loader = document.createElement('div')
    $loader.innerHTML=`<img src="public/oval.svg" alt="loader" class="loader__image">`
    $loader.classList.add('loader')
    $DynamicContent.id = 'dynamic-content' 
    $ROOT.innerHTML = ''
    $ROOT.appendChild($loader)
    $ROOT.appendChild($DynamicContent)
    await Router()
    $ROOT.removeChild($loader)
}
export default App