let valorDigitado = "0";

function pressionarBotao(valor, event) {
    const botao = event.currentTarget;
    aplicarEfeitosVisuais(botao);

    if (valor === 'C') {
        valorDigitado = "0";
    } else {
        if (valorDigitado === "0") {
            valorDigitado = valor;
        } else {
            if (valorDigitado.length < 5) {
                valorDigitado += valor;
            }
        }
    }
    document.getElementById('visor-temp').innerHTML = `${valorDigitado} <span class="unit-label">K</span>`;
}

function aplicarEfeitosVisuais(elemento) {
    const efeitosAntigos = elemento.querySelectorAll('.sword-slash, .zeus-lightning');
    efeitosAntigos.forEach(el => el.remove());

    const slash = document.createElement('div');
    slash.className = 'sword-slash';
    elemento.appendChild(slash);

    const lightning = document.createElement('div');
    lightning.className = 'zeus-lightning';
    elemento.appendChild(lightning);
}

function converterTemperatura(event) {
    aplicarEfeitosVisuais(event.currentTarget);

    const kelvin = parseFloat(valorDigitado);
    const container = document.getElementById('resultado-combate');

    if (isNaN(kelvin)) {
        container.innerHTML = "<p style='color: #e21b1b;'>Insira uma temperatura válida espartano!</p>";
        return;
    }

    const celsius = (kelvin - 273.15).toFixed(2);

    let statusCombate = "❄️ O frio extremo de Helheim permanece congelante.";
    if (celsius > 0) {
        statusCombate = "🔥 As chamas de Muspelheim despertaram!";
    } else if (celsius > 100) {
        statusCombate = "⚔️ Fúria total! O calor é capaz de derreter as correntes do Caos!";
    }

    container.innerHTML = `
        <div class="main-result">
            Chamas Despertadas: <strong>${celsius} °C</strong>
        </div>
        <div class="history-box">
            <h3>📜 Inscrição nas Runas</h3>
            <p class="history-line">⚡ <b>${kelvin} K</b> extraídos do vazio absoluto.</p>
            <p class="history-line">⚔️ Transformados em <b>${celsius} graus Celsius</b> na forja.</p>
            <p class="history-line" style="color: #cca43b; margin-top: 10px; font-weight: bold;">${statusCombate}</p>
        </div>
    `;
}