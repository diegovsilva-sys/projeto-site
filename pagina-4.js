// Função para alternar as abas do Menu Lateral com transições limpas
function mudarAba(idAba) {
    // Esconde todas as seções de conteúdo
    document.querySelectorAll('.container-abas').forEach(aba => {
        aba.classList.remove('active');
    });
    
    // Remove o destaque visual de todos os botões do menu
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Exibe a seção clicada
    document.getElementById(idAba).classList.add('active');
    
    // Procura o botão correto e adiciona a classe active nele
    const botoes = document.querySelectorAll('.menu-btn');
    botoes.forEach(btn => {
        if(btn.getAttribute('onclick').includes(idAba)) {
            btn.classList.add('active');
        }
    });
}

// Função de conversão Matemática de Minutos para Segundos
function converterTempo() {
    const inputMinutos = document.getElementById('minutos').value;
    const resultadoDiv = document.getElementById('resultadoTempo');
    
    // Bloqueia entradas vazias ou incoerentes
    if (inputMinutos === '' || inputMinutos < 0) {
        alert('Por favor, insira um tempo válido em minutos da partida!');
        return;
    }

    // Processamento da conversão (1 Minuto = 60 Segundos)
    const segundos = inputMinutos * 60;

    // Injeta os valores atualizados na estrutura HTML
    document.getElementById('valorMinutos').innerText = inputMinutos;
    document.getElementById('valorSegundos').innerText = segundos.toLocaleString('pt-BR'); // Adiciona pontos de milhar se for um número grande
    
    // Torna visível o bloco de resultado com animação
    resultadoDiv.style.display = 'block';
}