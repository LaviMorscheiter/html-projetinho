function mudarFotos(direcao) {
    const fotosConteudo = document.querySelector('.fotos__conteudo');
    const larguraImagem = document.querySelector('.fotos__conteudo__imagem').clientWidth;
    fotosConteudo.scrollBy({
        left: direcao * larguraImagem,
        behavior: 'smooth'
    });
}