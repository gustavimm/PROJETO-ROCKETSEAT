function toggleMode() {
    const html = document.documentElement

    //pegar a tag img

    const img = document.querySelector("#profile img")


        //substituir a imagem
    if (html.classList.contains ('light')){

        
        //se tiver dark mode, manter a imagem normal
        img.setAttribute( 'src','assets/avatar.png')
        
    } else{
        //se tiver light mode, adicionar imagem light   
        img.setAttribute('src' , 'assets/avatar-light.png')
        
   }
   html.classList.toggle ('light')

}

