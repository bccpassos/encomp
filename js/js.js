function descer(tag){
    targetOffset = $("." + tag).offset().top
    $("html, body").animate({ 
		scrollTop: targetOffset - 100
   }, 800);
}

function regressiva(){
    var target_date = new Date("september 29, 2020").getTime();
    var dias, horas, minutos, segundos;
    setInterval(function () {        
        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date)/1000;

        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400; 
        
        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600; 
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);

        document.getElementById('dia').innerHTML = dias + " d";
        document.getElementById('hora').innerHTML = horas + " h";
        document.getElementById('minuto').innerHTML = minutos + " m";
        document.getElementById('segundo').innerHTML = segundos + " s";  
    }, 1000);
}

function programacao(numero){   
    if(numero == 1){
        document.getElementById('botao1').style.background="#b2bec3";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra tal </p> <p id="horario"> 15:00 </p> <p id="responsavel"> Palestrante: Albert </p> <p id="breve_desc"> Essa é uma breve descrição da Palestra do Albert </p> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprenda programar com Python </p> <p id="horario"> 18:00 </p> <p id="responsavel"> Ministrante: Marisa - Pyladies Sul de Minas </p> <p id="breve_desc"> Este curso será ofertado para todos aqueles que querem aprender alguma linguagem de programação, ou desejam entrar no universo do Python. </p> </div> </div> <div id="progInd"> <img src="imagens/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa tal </p> <p id="horario"> 19:00 </p> <p id="responsavel"> PyLadies Sul de Minas </p> <p id="breve_desc"> Nesta roda de conversa será discutido assuntos voltado para a área da Computação, como: síndrome do impostor, mercado de trabalho e participação feminina. </p> </div> </div>';
    }
    
    if(numero == 2){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#b2bec3";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprenda programar com Python </p> <p id="horario"> 18:00 </p> <p id="responsavel"> Ministrante: Marisa - Pyladies Sul de Minas </p> <p id="breve_desc"> Este curso será ofertado para todos aqueles que querem aprender alguma linguagem de programação, ou desejam entrar no universo do Python. </p> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra tal </p> <p id="horario"> 15:00 </p> <p id="responsavel"> Palestrante: Albert </p> <p id="breve_desc"> Essa é uma breve descrição da Palestra do Albert </p> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprenda programar com Python </p> <p id="horario"> 18:00 </p> <p id="responsavel"> Ministrante: Marisa - Pyladies Sul de Minas </p> <p id="breve_desc"> Este curso será ofertado para todos aqueles que querem aprender alguma linguagem de programação, ou desejam entrar no universo do Python. </p> </div> </div> <div id="progInd"> <img src="imagens/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa tal </p> <p id="horario"> 19:00 </p> <p id="responsavel"> PyLadies Sul de Minas </p> <p id="breve_desc"> Nesta roda de conversa será discutido assuntos voltado para a área da Computação, como: síndrome do impostor, mercado de trabalho e participação feminina. </p> </div> </div> </div>';
    }
    
    if(numero == 3){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#b2bec3";
        document.getElementById('divProg').innerHTML = '<div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra tal </p> <p id="horario"> 15:00 </p> <p id="responsavel"> Palestrante: Albert </p> <p id="breve_desc"> Essa é uma breve descrição da Palestra do Albert </p> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra tal </p> <p id="horario"> 15:00 </p> <p id="responsavel"> Palestrante: Albert </p> <p id="breve_desc"> Essa é uma breve descrição da Palestra do Albert </p> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprenda programar com Python </p> <p id="horario"> 18:00 </p> <p id="responsavel"> Ministrante: Marisa - Pyladies Sul de Minas </p> <p id="breve_desc"> Este curso será ofertado para todos aqueles que querem aprender alguma linguagem de programação, ou desejam entrar no universo do Python. </p> </div> </div> <div id="progInd"> <img src="imagens/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa tal </p> <p id="horario"> 19:00 </p> <p id="responsavel"> PyLadies Sul de Minas </p> <p id="breve_desc"> Nesta roda de conversa será discutido assuntos voltado para a área da Computação, como: síndrome do impostor, mercado de trabalho e participação feminina. </p> </div> </div> </div>';
    }    
}

function PopUp(){
    newpopupWindow = window.open ("width=250 height=250");
    newpopupWindow.document.write ("Aqui você pode por o que quiser, por exemplo, uma imagem. <br/> <img src='..imagens/palestra.png'> <br/> Não se esqueça de não usar aspas duplas, só aspas individuais" );
}
    