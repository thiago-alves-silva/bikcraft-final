// o link de navegação que conter a url do site receberá uma classe
const ativaLink = (item) =>
  location.href.includes(item.href) && item.classList.add("ativo");

const navLinks = document.querySelectorAll(".menu a");
navLinks.forEach(ativaLink);

// Parametros para o formulário de orçamento
const ativaProduto = (value) => {
  const elemento = document.querySelector(`[value=${value}]`);
  elemento && (elemento.checked = true);
};

const url = new URLSearchParams(location.search);
url.forEach(ativaProduto);

// Galeria de imagens
const trocarImagem = (item, _, array) => {
  item.addEventListener("click", () => {
    array.forEach((e) => e.classList.remove("ativo"));
    item.classList.add("ativo");
  });
};

const fotos = document.querySelectorAll(".galeria img");
fotos.forEach(trocarImagem);

// Animações
if (window.SimpleAnime) new SimpleAnime();
