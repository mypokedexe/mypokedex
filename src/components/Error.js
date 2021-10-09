const  Error = props =>{
    const $Error = document.createElement('section')
    const $ErrorImage = document.createElement('img')
    const $ErrorMessage = document.createElement('h1')
    $ErrorImage.src = 'public/pikachu-two.png'
    $ErrorImage.alt = 'pikachu image'
    $ErrorMessage.innerHTML = `Error:${props.status}<br>${props.msg}`
    $Error.classList.add('error__box')
    $ErrorImage.classList.add('error__image')
    $ErrorMessage.classList.add('error__message')

    $Error.appendChild($ErrorMessage)
    $Error.appendChild($ErrorImage)
    return $Error
}
export default Error