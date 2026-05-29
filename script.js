// Aguarda todo o conteúdo da página carregar antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mensagem de Boas-vindas Dinâmica no Console (ou você pode usar em um alerta/elemento)
    const saudarUsuario = () => {
        const hora = new Date().getHours();
        let saudacao = "";

        if (hora >= 5 && hora < 12) {
            saudacao = "Bom dia! ☀️";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde! 🌳";
        } else {
            saudacao = "Boa noite! 🌙";
        }

        console.log(`${saudacao} Bem-vindo ao site do Agro Negócio. Juntos por um agro sustentável!`);
    };

    // 2. Rolagem Suave para os Links do Menu
    const linksMenu = document.querySelectorAll('nav a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede o comportamento padrão de pulo do link
            
            // Pega o id da seção (ex: #solucoes)
            const idAlvo = link.getAttribute('href'); 
            const secaoAlvo = document.querySelector(idAlvo);

            if (secaoAlvo) {
                // Faz a rolagem deslizar suavemente até a seção
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Efeito Visual Interativo nos Cards de Soluções
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Quando o mouse entra no card
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.boxShadow = '0 8px 16px rgba(46, 125, 50, 0.2)';
        });

        // Quando o mouse sai do card
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        });
    });

    // 4. Jogo Agro Negócio: escolha a prática mais sustentável
    const botoesJogo = document.querySelectorAll('.jogo-btn');
    const resultadoJogo = document.getElementById('resultadoJogo');

    botoesJogo.forEach(botao => {
        botao.addEventListener('click', () => {
            const resposta = botao.dataset.answer;
            if (resposta === 'certo') {
                resultadoJogo.textContent = 'Parabéns! Você escolheu uma prática sustentável. 🌱';
                resultadoJogo.style.color = '#2e7d32';
            } else {
                resultadoJogo.textContent = 'Ops! Esta opção não é a mais sustentável. Tente outra prática ecológica.';
                resultadoJogo.style.color = '#c62828';
            }
        });
    });

    // Abre o jogo logo no início
    const secaoJogo = document.getElementById('jogo');
    if (secaoJogo) {
        secaoJogo.scrollIntoView({ behavior: 'auto', block: 'start' });
    }

    // Executa a saudação ao carregar
    saudarUsuario();
});