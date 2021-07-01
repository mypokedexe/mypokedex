export const ErrorFuntion = (ErrorData )=>{
    let errorNumber = ErrorData.error_number === undefined ? ' ' : err.status
    let errorText = ErrorData.error_text === undefined ? 'Sorry an Error occurred' : err.statusText


    let $body = document.querySelector('body')
    $body.innerHTML = `
    <section class="error__box">
        <h2 class="error__text">
            Error:<span class="error__number">${errorNumber}</span><br>
            <span class="error__text" id="error__text">${errorText}</span>
        </h2>
        <img src="../resources/images/images-main/pikachu-two.png" alt="" class="error__image">
    </section>
    `
}

export const ErrorFuntionSearch = ( )=>{
    const $TemplateInsert = document.querySelector('.error__search__box')
    $TemplateInsert.classList.remove('error__seach__box')
    $TemplateInsert.classList.add('error__search__box__enabled')
    let $templateSearchError = `
    <article class="error__search__message__box">
            <i class="error__search__arrow fas fa-arrow-up"></i>
            <p class="error__search__message__text">You have entered an invalid name</p>
            <div class="error__search__message__button">
              <p class="error__search__message__button__text">OK</p>
            </div>
        </article>
        `
    $TemplateInsert.innerHTML = $templateSearchError

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.error__search__message__button')|| e.target.matches('.error__search__message__button__text')){
            $TemplateInsert.classList.add('error__seach__box')
            $TemplateInsert.classList.remove('error__search__box__enabled')
        }
    })
}