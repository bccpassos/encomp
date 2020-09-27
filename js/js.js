function descer(tag){
    targetOffset = $("." + tag).offset().top
    $("html, body").animate({ 
		scrollTop: targetOffset - 100
   }, 800);
}

function regressiva(){
    var target_date = new Date("september 28, 2020").getTime();
    var dias, horas, minutos, segundos;
    setInterval(function () {        
        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date)/1000;

        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400; 
        
        horas = (parseInt(segundos_f / 3600))+13;
        segundos_f = segundos_f % 3600; 
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);

        //document.getElementById('dia').innerHTML = dias + " d";
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
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Node Js </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://meet.google.com/xyb-hbrq-bfj" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Computação Quântica </p> <p id="horario"> 15:00 - 17:00 </p> <p id="responsavel"> Instrutora: Amanda - 6° Período </p> <a id="link-meet" href="https://meet.google.com/cai-nibh-gqo" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Análise de Negócios </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Fabrício Laguna </p> <a id="link-meet" href="https://meet.google.com/oja-bvsg-mja" target="_blank"> ASSISTIR PALESTRA </a> </div> </div> </div>';
    }
    
    if(numero == 2){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#b2bec3";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de Conversa Papo com PyLadies </p> <p id="horario"> 13:00 - 14:30 </p> <p id="responsavel"> PyLadies Sul de Minas </p> <a id="link-meet" href="https://meet.google.com/esr-rviv-obr" target="_blank"> ASSISTIR RODA DE CONVERSA </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Arduíno </p> <p id="horario"> 15:00 - 18:00 </p> <p id="responsavel"> Instrutor: Albert - 6° Período </p> <a id="link-meet" href="https://meet.google.com/dmy-turn-agf" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Computação Forense </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: André Bononi </p> <a id="link-meet" href="https://meet.google.com/qvg-wfaz-dfk" target="_blank"> ASSISTIR PALESTRA </a> </div> </div> </div>';
    }
    
    if(numero == 3){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#b2bec3";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso React </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://meet.google.com/gby-rzbo-brd" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Git e GitHub </p> <p id="horario"> 16:00 - 18:00 </p> <p id="responsavel"> Instrutora: Marisa - 8° Período </p> <a id="link-meet" href="https://meet.google.com/bcz-qgfk-sze" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Lei Geral de Proteção de Dados (LGPD) - Desafios e oportunidades para o profissional de TI </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Anderson Souza </p> <a id="link-meet" href="https://meet.google.com/hxp-vxbj-arm" target="_blank"> ASSISTIR PALESTRA </a> </div> </div> </div>';
    }  
    
    if(numero == 4){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#b2bec3";
        document.getElementById('botao5').style.background="#dfe4ea";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso React Native </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Jonatan - 4° Período </p> <a id="link-meet" href="https://meet.google.com/nzw-tret-dnb" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso Criando sites responsivos com o Bootstrap </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutora: Janaína - Docente </p> <a id="link-meet" href="https://meet.google.com/kuf-ddyr-eyf" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra Segurança Ofensiva </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Joatham Pedro </p> <a id="link-meet" href="https://meet.google.com/bjc-qdco-pru" target="_blank"> ASSISTIR PALESTRA </a> </div> </div> </div>';
    } 
    
    if(numero == 5){
        document.getElementById('botao1').style.background="#dfe4ea";
        document.getElementById('botao2').style.background="#dfe4ea";
        document.getElementById('botao3').style.background="#dfe4ea";
        document.getElementById('botao4').style.background="#dfe4ea";
        document.getElementById('botao5').style.background="#b2bec3";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso de Docker e Kubernetes </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutor: Luís Felipe - 8° Período </p> <a id="link-meet" href="https://meet.google.com/tqc-ujvh-fxq" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso A importância do tratamento de imagens no comércio digital </p> <p id="horario"> 13:00 - 17:00 </p> <p id="responsavel"> Instrutora: Naiane </p> <a id="link-meet" href="https://meet.google.com/dyb-ksaa-rqe" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Aprendendo a programar com Python </p> <p id="horario"> 16:00 - 18:00 </p> <p id="responsavel"> Instrutora: Marisa - 8° Período </p> <a id="link-meet" href="https://meet.google.com/qrh-omee-nvx" target="_blank"> ASSISTIR MINICURSO </a> </div> </div> <div id="progInd"> <img src="imagens/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra AWS Business Professional </p> <p id="horario"> 19:00 - 21:00 </p> <p id="responsavel"> Palestrante: Rafael Kelles </p> <a id="link-meet" href="https://meet.google.com/ebj-exxv-kzj" target="_blank"> ASSISTIR PALESTRA </a> </div> </div> </div>';
    }   
}

function MostraTexto(nome){
    document.getElementById(nome).style="opacity:1;";
    document.getElementById(nome+'M').style="filter: grayscale(100%);";
}

function TiraTexto(nome){
    document.getElementById(nome).style="opacity:0;";
    document.getElementById(nome+'M').style="filter: grayscale(20%);";
}  