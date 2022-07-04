let url = "https://economia.awesomeapi.com.br/last/USD-BRL";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    valorDolarEmReais = data.USDBRL.high;
    let context = document.getElementById("context");
    context.innerHTML =
      "O valor atual do dólar em reais é: " + valorDolarEmReais;
    return valorDolarEmReais;
  });

function calcular() {
  let valor = document.getElementById("textValor");
  if (valor.value == "") {
    alert("Por favor, informe um valor!");
  } else {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let valor = document.getElementById("textValor");
        valorRealEmDolar = valor.value / data.USDBRL.high;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML =
          "O valor de R$" + valor.value + " em dólar é $" + valorRealEmDolar;
      });
  }
}
