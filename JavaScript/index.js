const objetos = ['Cadeira', 'Impressora', 'Garfo'];
console.log(objetos);

const verificarValor = () => {
    const entradaTexto = document.getElementById("entradaTexto");
    // Bloco para validar se a id está correta, pois tive problema com nome da id: caractere errado.
    /* if (!entradaTexto) {
        console.log("O elemento com essa ID não foi encontrado no HTML");
        return;
    } */

    // Se o campo estiver vazio, exiba um erro de valor inválido
    if (entradaTexto.value.trim() === '') {
        console.log("Valor null");
        alert("Informe um valor válido");
    }
    else {
        // Verifica se o valor do input existe no array
        let indice = objetos.indexOf(entradaTexto.value);

        if (indice > -1) {
            alert("O objeto já existe");
        }
        else {
            // Adiciona o objeto escrito ao array
            objetos.push(entradaTexto.value);
            alert("Objeto adicionado ao array!");
            console.log(objetos);
            entradaTexto.value = '';
        }
    }
}

const ordenarObjetos = () => {
    objetos.sort();
    console.log(objetos);
}