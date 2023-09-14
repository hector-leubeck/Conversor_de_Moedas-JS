function Converter() {
  const valorEmReal = document.getElementById("valor");
  let valor = parseFloat(valorEmReal.value);

  let conversao = valor / 5.21;

  const valorConvertido = document.getElementById("valorConvertido");
  const resultado = `R$ ${valorParseado.toFixed(
    2
  )} equivale a EU$" ${conversao.toFixed(2)}`;
  valorConvertido.innerHTML = resultado;
}

function conversaoDolar() {
  const valorEmReal = document.getElementById("valor");
  let valor = parseFloat(valorEmReal.value);

  let conversao = valor / 5.23;

  const valorConvertido = document.getElementById("valorConvertido");
  const resultado = `R$${valorParseado.toFixed(
    2
  )} equivale a U$${conversao.toFixed(2)}`;
  valorConvertido.innerHTML = resultado;
}
