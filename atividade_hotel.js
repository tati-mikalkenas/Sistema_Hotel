var nomehotel= prompt("Qual o nome do hotel que deseja se hospedar ?")
alert(" Que ótimo ! O nome do hotel que deseja é: " + nomehotel+ ".")


var usuario= prompt("Digite o nome do usuário.");
senhaUser();


var diaria=''
var confirma=''



function inicio() {

  var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Sistema de Hóspedes 4.) Abastecer carros 5.) Eventos 6.) Buffet para eventos  7.) Auditórios 8.) Abastecer carros 9.) Manutenção do Ar condicionado 10.)Sair'));

  switch(escolha) {
  case 1:
      reserva_quartos();
      break;

  case 2:  
      cadastro_hospedes();
      break;

  case 3:
    sistema_cadastrar_hospedes();
    break;
  

  case 4: 
      abastecer_carros();
      break;

  case 5: 
  eventos();
  break;

  case 6: 
      buffet();
      break;

  case 7:
  auditorios();
  break;
  
  case 8: 
      abastecer_carros();
      break;

  case 9: 
   manutencaoArCondicionado();
   break;

 case 10: 
  sair();
  break;
  

  default:
      erro();	
      break;

}		
}

function reserva_quartos() {
  alert(nomehotel+ "- RESERVA DE QUARTOS");

  diaria= parseInt(prompt("Qual o valor padrão da diária ?"));
   if (diaria > 0) {
    diarias();
    } else {
     alert("Valor inválido " + usuario());
     inicio();
   }

 
   

  
}

function cadastro_hospedes() {

alert('HOTEL ' + nomehotel + "- CADASTRO DE HÓSPEDES");

 diaria=parseInt(prompt("Qual o valor padrão da diária ?"));


var hospede=prompt("Qual o nome do hóspede ?");
var gratuidade=0
var meia=0
var inteira=0
var soma=0


 while (hospede != "PARE" ) {
  var idade=parseInt(prompt("Qual a idade do hóspede ?"));

 if ( idade < 6) {
  gratuidade++;
  soma= soma + 0;
  
  alert(hospede + " cadastrado(a) com sucesso ! " + hospede + " possui gratuidade");
  

 } else if ( idade > 59) {
  meia++;
  soma= soma + (diaria/2);

  alert( hospede + " cadastrado(a) com sucesso ! " + hospede + " paga meia ");
  

 } else {
   inteira++;
   soma=soma + diaria; 

  alert( hospede + " cadastrado(a) com sucesso ! ");

 } 

  hospede=prompt("Qual o nome do hóspede ?");

}

alert ( usuario + " o valor total das hospedagens é: R$ " + soma + " sendo " + gratuidade + " gratuidades " + " e " + meia + " meias");

}


function abastecer_carros() {
  alert('HOTEL {NOME DO HOTEL} - ABASTECER');
  inicio();
}

function erro_senha() {
  alert('Não foi possível prosseguir com sua solicitação. Gostaria de tentar novamente ?');
  senhaUser();
}

function erro(){
  alert('Não foi possível prosseguir com sua solicitação. Gostaria de tentar novamente ?');
  sair();
}

function sair() {
  var confirma = confirm('Você deseja sair?');
  if (confirm) {
      alert("Muito obrigado e até logo, " + usuario)
      window.close();
  } else {
      inicio();
  }
}



function senhaUser(){
var senha= parseInt(prompt("Digite sua senha"));
if(senha === 2678) {
  boas_vindas();
} else {
  prompt("Senha incorreta, digite sua senha novamente. ")
  erro_senha();
}
}







function boas_vindas (){
 alert(" Olá "+ usuario + " Seja muito bem vindo(a) ao hotel: " + nomehotel + " É um imenso prazer ter você por aqui!")
 inicio();
 }




function diarias(){

    var dias=prompt("Quantos dias você ficará hospedado ?");
        if (dias < 30){
            resultado;
        } else {
        alert("Quantidades de dias inválida");
         inicio();
        }
var resultado= diaria * dias

alert("O valor de: " + dias + " dias de hospedagem é de: R$ " + resultado);

var hospede= prompt("Qual o nome do hóspede ?")
confirma=prompt("Caro(a) "+ usuario+", você confirma a hospedagem para "+ hospede+ " por: "+ dias + " dias ? " + "(Sim/Não)");

if(confirma === 'Sim' ) {
  alert( usuario + " Hospedagem confirmada !");
  inicio();
} else {
  'Não'
  alert( usuario + " Reserva não confirmada.");
  sair();
}
}


// Exercício 3:


			var lista_hospedes = [];
			
			function sistema_cadastrar_hospedes() {

				var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					sair();
				} else {
					erro_pesquisar_hospedes();
				}
			}
			
			function cadastrar_hospedes() {
				
				if (lista_hospedes.length >= 15){
					alert("Numero máximo de hóspedes cadastrados.");
				} else {	
					var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
					
					
					lista_hospedes.push(nome_hospede);
					console.log(lista_hospedes); 
					alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
				}
				
				sistema_cadastrar_hospedes();
			}
			
			function pesquisar_hospedes() {
				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
			
				if (lista_hospedes.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).')
				} else {
					alert(nome_hospede + ' não foi encontrada(o).')
				}
				
				sistema_cadastrar_hospedes() 
			}
			
			function erro_pesquisar_hospedes(){
				alert('Por favor, informe um número entre 1 e 3');
				sistema_cadastrar_hospedes();
			}
			
			


  // Exercício 4
  // Cada garçom custa 10.50 a hora

  
  function eventos(){

  var horas=parseInt(prompt("Qual a duração do evento em horas?"));
  var garcom=parseInt(prompt("Quantos garçons serão necessários?"));


    var resultado=horas*10.50

    alert("Será cobrado:R$ " + resultado+ " por: " + horas+ " horas.");
    var reserva= prompt("Gostaria de efetuar a reserva? Sim/Não");
    if(reserva === 'Sim' ){
      alert( usuario +" , reserva efetuada com sucesso.");
    }else{
      alert("Reserva não efetuada.");
    }
     
    var confirma= prompt("Você necessita de restaurante para seu evento? Sim/Não");
    if(confirma=== 'Sim'){
    restaurante();
    }else{
      alert("Obrigada!");
    }


  }


  // Exercicio 5
  //A quantidade de café, em litros, é calculada como 0,2 litro para cada convidado; a quantidade de água é calculada como 0,5 litro para cada convidado; são oferecidos 7 salgados por pessoa. 

//Sabendo que cada litro de café custa, 0,80 centavos, cada litro de água custa 0,40 centavos e o cento de salgados custa 34 reais, calcule o custo total com comida do evento. 
// Por último, pergunte se o usuário aceita os valores. Se "SIM", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."
 
  
 

  function buffet(){
   
  var cafe=0.2;
  var agua=0.5;
  var salgados=7;
  var calculo_cafe=0;
  var calculo_agua=0;
  var calculo_salgados=0;
  var valor_cafe=0.80;
  var valor_agua=0.40;               
  var valor_salgado=0.34;     
  var custo_cafe=0;
  var custo_agua=0;
  var custo_salgado=0;
  var custo_total=0;
  


    var convidados=(prompt( "Qual o número de convidados para o evento?"));
    if(convidados <= 350){
      calculo_cafe= (convidados * cafe);
      calculo_agua= (convidados*agua);
      calculo_salgados= (convidados* salgados);
      custo_cafe= (calculo_cafe*valor_cafe);
      custo_agua= (calculo_agua*valor_agua);
      custo_salgado=(calculo_salgados*valor_salgado);
      custo_total=(custo_cafe + custo_agua + custo_salgado).toFixed(2);

      

      alert("O evento precisará de: "+ calculo_cafe + " litros de café, " + calculo_agua +" litros de água e " + calculo_salgados +" salgados.O custo total do evento será de: R$"+ custo_total);


    }else{
      alert( "Quantidade de convidados superior à capacidade máxima.");
    }

    var confirma=prompt("Gostaria de efetuar a reserva? S/N");
    if(confirma=== 'Sim'){
      alert(usuario +" , reserva efetuada com sucesso.");
    }else{
      alert("Reserva não efetuada.");
    }


    return custo_total;

  }

  //Exercício 6

  function auditorios(){
    var auditorio_laranja=150;
    var auditorio_colorado=350;


    var convidados= (prompt("Qual o número de convidados para seu evento?"));

   
    if(convidados > auditorio_colorado){
       alert("Quantidade de convidados superior à capacidade máxima");
       auditorios();

    } else if (convidados > 220){
       alert("Use o auditório Colorado");

    } else if(convidados < auditorio_laranja){
      alert("Use o auditório Laranja");
  
    }else if( convidados > auditorio_laranja < 220){
                alert("Use o auditório Laranja (inclua mais " + (convidados - auditorio_laranja)   + " cadeiras)");
            }
      
    var confirma=prompt("Gostaria de efetuar a reserva? Sim/Não");
    if(confirma=== 'Sim'){
      alert(usuario +" , reserva efetuada com sucesso.");
      inicio();
    }else{
      alert("Reserva não efetuada.");
      inicio();
    }
  }


  // Exercicio 7:

function restaurante(){
  // O restaurante está disponível para reservas de segunda a sexta das 7hs às 23hs; sábados e domingos apenas das 7hs às 15hs. 
  
  var dia = prompt("Qual o dia do seu evento?").toLowerCase();
  var hora = prompt("Qual a hora do seu evento?");
  var empresa=prompt("Qual o nome da empresa?");

  if(dia == "segunda" || dia == "terça" || dia =="quarta" || dia =="quinta" || dia =="sexta" && hora >=7 && hora <23){
    alert("Restaurante reservado para " + empresa + ". " + dia + " ás " + hora + "hs.");
     evento();
  }else if(dia == "sabado" || dia == "domingo" && hora >=7 && hora <15){
    alert("Restaurante reservado para " + empresa + ". " + dia + " ás " + hora + "hs.");
     evento();
  }else {
    alert("Restaurante indisponível");
    restaurante();
}

}

  //Exercicio 8:

  function abastecer_carros(){
   var litros=42;
   var diferenca=0;

    var alcool_wayne=parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    var gasolina_wayne=parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    var alcool_stark=parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    var gasolina_stark=parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    if(alcool_wayne < alcool_stark && gasolina_wayne < gasolina_stark){
      if(alcool_wayne < gasolina_wayne){
          diferenca = (alcool_wayne * 100)/gasolina_wayne;
          if(diferenca <= 70){
              alert(usuario + ", é mais barato abastecer com álcool no Wayne Oil.");
          }else{
              alert(usuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
          }
      }else{
          alert(usuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
      }
  }else if(alcool_stark < alcool_wayne && gasolina_stark < gasolina_wayne){
      if(alcool_stark < gasolina_stark){
          diferenca = (alcool_stark * 100)/gasolina_stark;
          if(diferenca <= 70){
              alert(usuario + ", é mais barato abastecer com álcool no Stark Petrol.");
          }else{
              alert(usuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
          }
      }else{
          alert(usuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
      }
  }else{
      if(alcool_stark < gasolina_stark){
          diferenca = (alcool_wayne * 100)/gasolina_stark;
          if(diferenca <= 70){
              alert(usuario + ", é mais barato abastecer com álcool no Wayne Oil.");
          }else{
              alert(usuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
          }
      }else if(alcool_stark < gasolina_wayne){
          diferenca = (alcool_stark * 100)/gasolina_wayne;
          if(diferenca <= 70){
              alert(usuario + ", é mais barato abastecer com álcool no Stark Petrol.");
          }else{
              alert(usuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
          }
      }
  }
  inicio();



  // Exercício 9

  function manutencaoArCondicionado(){
    var contagem = 0;
    var custoTotal = 0;
    var custoMaisBarato = 0;
    var empresaMaisBarata = "";
    var informarNovosDados = true;

    while(informarNovosDados){
        var nomeEmpresa = prompt("Qual o nome da empresa?");

        if(nomeEmpresa == null || nomeEmpresa == ""){
            var confirmarNome = confirm("Você está tentando digitar o nome da empresa?");

            if(confirmarNome){
                manutencaoArCondicionado();
            }else{
                var confirmarInicio = confirm("Você está tentando voltar para o menu inicial?");

                if(confirmarInicio){
                    informarNovosDados = false;
                    inicio();
                }else{
                    informarNovosDados = false;
                    sair();
                }
            }
        }else{
            var porcento = 0;
            var valorAparelho = parseInt(prompt("Qual o valor por aparelho?"));
            var quantAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
            var porcentagemDesc = parseInt(prompt("Qual a porcentagem de desconto?"));
            var quantMinAparelho = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

            if(quantAparelho >= quantMinAparelho){
                porcento = (porcentagemDesc/100)*(valorAparelho*quantAparelho);
                custoTotal = (valorAparelho*quantAparelho)-porcento;

                alert("O serviço da " + nomeEmpresa + " custará R$ " + custoTotal.toFixed(2));

            }else{
                custoTotal = valorAparelho*quantAparelho;
                alert("O serviço da " + nomeEmpresa + " custará R$ " + custoTotal.toFixed(2));
            }

            if(contagem == 0){
                custoMaisBarato = custoTotal;
                empresaMaisBarata = nomeEmpresa + " por R$" + custoTotal.toString();
            }else if(custoTotal < custoMaisBarato){
                custoMaisBarato = custoTotal;
                empresaMaisBarata = nomeEmpresa + " por R$" + custoTotal.toString(); 
            }
            
            contagem++
            informarNovosDados = confirm("Deseja informar novos dados, " + nomeUsuario + "?");
        }
    }

    alert("O orçamento de menor valor é o " + empresaMaisBarata);
    inicio();
}













}

  




















 

























