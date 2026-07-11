function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const deUnidade = document.getElementById('deUnidade').value;
    const paraUnidade = document.getElementById('paraUnidade').value;
    const resultadoDiv = document.getElementById('resultado');

    // Se o usuário não digitar nada, não faz o cálculo
    if (isNaN(valor)) {
        resultadoDiv.innerText = "Por favor, insira um número.";
        return;
    }

    // Passo 1: Converter a unidade de origem para a base (Metros)
    let metros = 0;
    if (deUnidade === "m") metros = valor;
    else if (deUnidade === "km") metros = valor * 1000;
    else if (deUnidade === "mi") metros = valor * 1609.34;
    else if (deUnidade === "in") metros = valor * 0.0254;

    // Passo 2: Converter de Metros para a unidade de destino
    let resultadoFinal = 0;
    if (paraUnidade === "m") resultadoFinal = metros;
    else if (paraUnidade === "km") resultadoFinal = metros / 1000;
    else if (paraUnidade === "mi") resultadoFinal = metros / 1609.34;
    else if (paraUnidade === "in") resultadoFinal = metros / 0.0254;

    // Exibir o resultado formatado na tela
    resultadoDiv.innerText = `Resultado: ${resultadoFinal.toFixed(4)}`;
}