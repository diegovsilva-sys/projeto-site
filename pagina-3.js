function converterMoeda() {
    const usdInput = document.getElementById('usd').value;
    const cotacaoInput = document.getElementById('cotacao').value;
    const painelResultado = document.getElementById('painel-resultado');
    const txtResultado = document.getElementById('resultado');

    // Validação temática em caixa alta
    if (usdInput === '' || cotacaoInput === '') {
        alert('SISTEMA FALHOU: INSIRA AS QUANTIDADES PARA ALIMENTAR A ESTÁTUA DA DIVINDADE!');
        return;
    }

    const usd = Number(usdInput);
    const cotacao = Number(cotacaoInput);
    const valorEmReal = usd * cotacao;

    // Conversão de moeda local limpa
    const valorFormatado = valorEmReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Limpa e reseta a animação explosiva do badge SSS
    const badgeAntigo = document.querySelector('.rank-badge');
    if (badgeAntigo) {
        badgeAntigo.remove();
    }

    const sssBadge = document.createElement('div');
    sssBadge.className = 'rank-badge';
    sssBadge.textContent = 'SSS STYLE!!';
    
    painelResultado.appendChild(sssBadge);

    // Renderiza o total na tela e aciona a animação de impacto 3D do CSS
    txtResultado.textContent = valorFormatado;
    painelResultado.style.display = 'block';
}