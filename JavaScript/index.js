const verificarValor = () => {

let btnAdicionar = document.getElementById("btnAdicionar");

let btnOrdenar = document.getElementById("btnOrdenar");


const objetos = ['Cadeira', 'Impressora', 'Garfo'];

console.log(objetos);


    const entradaTexto = document.getElementById("entradaTexto");
    // Bloco para validar se a id está correta
    /* if (!entradaTexto) {
        console.log("O elemento com essa ID não foi encontrado no HTML");
        return;
    } */

    if (entradaTexto.value.trim() === '') {
        console.log("Valor null");
        alert("Informe um valor válido");
    }
    
    else {
        let indice = objetos.indexOf(entradaTexto.value);
        if (indice > -1) {
            alert("O objeto já foi adicionado");
        }
        else {
            console.log("O objeto pode ser adicionado");
            return;
        }
        console.log("erro desconhecido");
    }
}