window.sr = ScrollReveal({ reset: true });

sr.reveal('.span-2', {duration: 1000});
sr.reveal('.blocoDois', {duration: 1000});
sr.reveal('.blocos', {duration: 1000});
sr.reveal('.banner', {duration: 1500});

function typeWriter(elemento) {
    const texto = elemento.innerHTML;
    elemento.innerHTML = '';
    let i = 0;
    const interval = setInterval(function() {
        // Adiciona cada caractere do texto um por um
        if (texto[i] === '<') {
            // Encontra a próxima tag
            const tagEnd = texto.indexOf('>', i);
            // Adiciona a tag inteira de uma vez
            elemento.innerHTML += texto.substring(i, tagEnd + 1);
            i = tagEnd + 1;
        } else {
            elemento.innerHTML += texto[i];
            i++;
        }

        // Se chegarmos ao final do texto, limpa o intervalo
        if (i >= texto.length) {
            clearInterval(interval);
        }
    }, 30);
}

// Seleciona o elemento desejado
const titulo = document.querySelector('.span-2');

// Chama a função passando o elemento selecionado
typeWriter(titulo);

    // Quando o documento estiver completamente carregado
    document.addEventListener("DOMContentLoaded", function() {
        // Rola para o topo da página
        window.scrollTo(0, 0);
    });

// Função para mostrar ou ocultar o botão "Voltar para o Topo" conforme a posição da rolagem
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var btnTopo = document.getElementById("btnTopo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}

// Função para rolar suavemente para o topo da página quando o botão é clicado
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav(){
  document.querySelector('.overlay').style.width = '50%'
}
function closeNav(){
  document.querySelector('.overlay').style.width = '0%'
}
