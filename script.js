/*
   script.js
   Lógica de navegação para o portfólio.
   Este script gerencia a troca de conteúdo sem recarregar a página.
*/

// Espera o DOM (a estrutura da página) ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links de navegação e todas as seções de conteúdo.
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Adiciona um "ouvinte de evento" de clique para cada link da navegação.
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link (que seria navegar para uma âncora).
            event.preventDefault();

            // Pega o ID da seção alvo do atributo href do link (ex: '#sobre').
            const targetId = link.getAttribute('href');

            // Remove a classe 'active' de todos os links para "desativá-los".
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Adiciona a classe 'active' apenas ao link que foi clicado.
            link.classList.add('active');
            
            // Esconde todas as seções de conteúdo.
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostra a seção de conteúdo correspondente ao link clicado.
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});