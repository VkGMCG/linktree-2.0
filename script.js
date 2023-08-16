function toggleMode() {
  const html = document.documentElement
  // Aqui está selecionando a pasta onde tem o "switch".

  // if(html.classList.contains('light')) {
  //    if é um condicional boolean. Se trata de uma pergunta: HTML, na lista de classe contem o "light"?
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }
  // Se interpreta como: Se "light" for verdadeiro, realiza uma função (if), se for falso, realiza outra (else).
  // Toda essa cadeia de código pode ser substituido por uma linha:

  html.classList.toggle('light')

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if(html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    // "src" é onde está o código, e em seguida a img.
    img.setAttribute('alt', 'Cachorrin fdp feio fino senhores')
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}
