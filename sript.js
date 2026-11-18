const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "puella.png";

const colunas = 2;
const linha = 7;
const totalFrames = colunas * linha;

let frameAtual = 0;

const duracaoFrame = 100;
let ultimoMomentoFrame = 0;

imagem.onload = () => {
    const larguraFrame = imagem.width / colunas;
    const alturaFrame = imagem.height / linha;

    canvas.width = larguraFrame;
    canvas.height = alturaFrame;

    desenharFrame();
    requestAnimationFrame(animar);
}
 
function desenharFrame(){
    const larguraFrame = imagem.width / colunas;
    const alturaFrame = imagem.height / linha;

    const coluna = frameAtual % colunas;
    const linhas = Math.floor(frameAtual / colunas );

    const origemX = coluna * larguraFrame
    const origemY = linhas * alturaFrame

    contexto.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    contexto.drawImage(
        imagem,
        origemX,
        origemY,
        larguraFrame,
        alturaFrame,
        0,
        0,
        canvas.width,
        canvas.height
    )
}

function proximoFrame(){
    frameAtual++;

    if(frameAtual >= totalFrames){
        frameAtual = 0
    }

    desenharFrame();
}

function animar(momento){
    if (momento - ultimoMomentoFrame >= duracaoFrame){
        proximoFrame();
        ultimoMomentoFrame = momento
    }

    requestAnimationFrame(animar);
}