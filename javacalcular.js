function calcularFRETE(event){
    event.preventDefault();
    var numero = document.getElementById('numero').value;
    const selecionar = document.querySelector('#options');
    console.log(selecionar);
    var valor = selecionar.value;

    if (numero == '' || valor ==''){
        window.alert("Por Favor! Preencha os Dados");
        return;
    }
    switch(valor){
      case '5':
        var resultado = ((numero * 1.5) + 10);
      break;
      case '4':
        var resultado = ((numero * 1.3) + 9);
      break;
      case '3':
        var resultado = ((numero * 1.2) + 8);
      break;
       case '2':
        resultado = "FRETE GRÁTIS";
        document.getElementById('resultado').innerHTML = resultado;
       break;
       case '1':
        resultado = "FRETE GRÁTIS";
        document.getElementById('resultado').innerHTML = resultado;
       break;   
    }
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultadoFrete').style.display="block";
   
}

// INÍCIO DO ALGORITMO
document.getElementById('resultadoFrete').style.display="none";
document.getElementById('freteForm').addEventListener('submit', calcularFRETE);
