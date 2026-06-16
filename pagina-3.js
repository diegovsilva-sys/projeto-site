function converterMoeda() {
    const usdInput = document.getElementById('usd').value;
    const cotacaoInput = document.getElementById('cotacao').value;
    const painelResultado = document.getElementById('painel-resultado');
    const txtResultado = document.getElementById('resultado');

    if (usdInput === '' || cotacaoInput === '') {
        alert('VALORES INVÁLIDOS. INSIRA AS RED ORBS DE TROCA!');
        return;
    }

    const usd = Number(usdInput);
    const cotacao = Number(cotacaoInput);
    const valorEmReal = usd * cotacao;

    const valorFormatado = valorEmReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Remove badge antigo se já existir para reiniciar a animação
    const badgeAntigo = document.querySelector('.rank-badge');
    if (badgeAntigo) badgeAntigo.remove();

    // Cria o selo de Rank Combo SSS dinâmico do Devil May Cry
    const sssBadge = document.createElement('div');
    sssBadge.className = 'rank-badge';
    sssBadge.textContent = 'SSS STYLE!!';
    painelResultado.appendChild(sssBadge);

    // Renderiza e ativa o painel estilizado
    txtResultado.textContent = valorFormatado;
    painelResultado.style.display = 'flex';
}