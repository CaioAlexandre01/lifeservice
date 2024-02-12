window.sr = ScrollReveal({ reset: true });

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
    }, 40);
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