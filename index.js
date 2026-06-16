let valorDigitado = "0";

function pressionarBotao(valor, event) {
    // 1. DISPARA RAIOS E ESPADAS NO BOTÃO SELECIONADO
    const botao = event.currentTarget;
    aplicarEfeitosVisuais(botao);

    // 2. SISTEMA DE INPUT VIRTUAL
    if (valor === 'C') {
        valorDigitado = "0";
    } else {
        if (valorDigitado === "0") {
            valorDigitado = valor;
        } else {
            // Limitação preventiva para manter o visor alinhado
            if (valorDigitado.length < 6) {
                valorDigitado += valor;
            }
        }
    }

    // Alimenta o visor mantendo a estilização
    document.getElementById('visor-cm').innerHTML = `${valorDigitado} <span class="unit-label">CM</span>`;
}

function aplicarEfeitosVisuais(elemento) {
    // Limpa efeitos antigos para permitir cliques consecutivos rápidos
    const efeitosAntigos = elemento.querySelectorAll('.sword-slash, .zeus-lightning');
    efeitosAntigos.forEach(el => el.remove());

    // Injeta Efeito de Lâmina
    const slash = document.createElement('div');
    slash.className = 'sword-slash';
    elemento.appendChild(slash);

    // Injeta Efeito de Eletricidade
    const lightning = document.createElement('div');
    lightning.className = 'zeus-lightning';
    elemento.appendChild(lightning);
}

function converterEspartano(event) {
    // Dispara animação no botão principal de conversão
    aplicarEfeitosVisuais(event.currentTarget);

    const cm = parseFloat(valorDigitado);
    const container = document.getElementById('resultado-combate');

    if (isNaN(cm) || cm < 0) {
        container.innerHTML = "<p style='color: #e21b1b;'>Insira uma distância válida, mortal!</p>";
        return;
    }

    // REGRA MATEMÁTICA: Centímetros para metros (divide por 100)
    const metros = (cm / 100).toFixed(2);

    // Renderização dos dados no mural mitológico
    container.innerHTML = `
        <div class="main-result" style="animation: revealLine 0.4s ease;">
            Extensão Convertida: <strong>${metros} M</strong>
        </div>
        <div class="history-box" style="animation: revealLine 0.5s ease;">
            <h3>📜 Veredito das Irmãs do Destino</h3>
            <p class="history-line">⚔️ Sua investida cobriu <b>${metros} metros</b> de terreno.</p>
            <p class="history-line">⚡ A marca inicial de <b>${cm} centímetros</b> foi superada.</p>
        </div>
    `;
}