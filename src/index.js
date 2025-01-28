import fs from "fs";

const arquivo = "./arquivos/texto-web.txt";

fs.readFile(arquivo, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    quebraEmParagrafos(data);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split("\n");
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavraDuplicada(paragrafo);
    });
    console.log(contagem);
}


function verificaPalavraDuplicada(texto) {
    const palavras = texto.split(" ");
    const resultado = {};
    palavras.forEach((palavra) => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });
    return resultado;
}
