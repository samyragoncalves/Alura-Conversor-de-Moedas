function getValue(valor){
    valor = prompt(`Insira valor em dolares!`,`Dolares...`);
    if (valor != null){ 
      var valorReais = parseFloat(valor) * 5.50;
      alert(`Você vai levar R$ ${valorReais.toFixed(2)}`);
    }else{
      alert(`Você cancelou a operação.`)
    }
  }
  
  //Revisão
  
  //variáveis var int - float - string
  
  //alert - parseInt - parseFloat - prompt 
  
  //operações + somar * multiplicar 