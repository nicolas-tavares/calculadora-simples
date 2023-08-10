
function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;   /*  // .innerHTML = recebe ou define um novo conteudo HTML */
   document.getElementById('resultado').innerHTML = numero + num; /* soma o numero antes selecionado com o novo vindo do parametro para criar numeros com mais casas decimais (sem essa linha, o numero ia apenas substituir o outro) */
}

function clean(){
    document.getElementById('resultado').innerHTML = ""; /* função quando chamada, reinicia o campo "resultado" */
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); /* função quando chamada lê o tamanho do resultado (length) e diminui 1 */
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){                                                           /* Se houver algo em 'resultado' entra no if, se não vai pro else */
        document.getElementById('resultado').innerHTML = eval(resultado)     /* eval =  avalia o expressão de cadeia de caracteres e retorna seu valor */
    }
}