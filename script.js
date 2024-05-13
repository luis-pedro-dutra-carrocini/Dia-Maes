function menssol(){
    document.getElementById('dia-maes').style.visibility = 'hidden';
    document.getElementById('p-maes').style.visibility = 'hidden';
    document.getElementById('mens').style.backgroundColor = 'rgb(201, 201, 1)';
    document.getElementById('mens').classList.add('mostrar');
    document.getElementById('p-mens').style.display = 'block';
    document.getElementById('p-mens').innerHTML = 'Por que você é tão importante? <br><br> Você não é importante só porque você lava a roupa, arruma a cosinha ou limpa a casa. <br> Mas sim porque você é a luz em meio a escuridão que aparece em minha vida, me guiando sempre pelos melhores caminhos. <br> Como o sol, que brilha e faz as flores crescerem e florescerem, você desde o início sempre cuidou de mim, me ensinado o que realmente importa na vida, que é amar e ser amado. <br> Você me faz continuar em frente, a não desistir e a acreditar que tudo dará certo, com a graça Daquele que tudo criou. <br><br>';
    document.getElementById('flor1').classList.add('pulse');
    document.getElementById('sol').classList.remove('pulse');
    document.getElementById('p-maes').innerHTML = 'Clique na primeira flor e saberá a primeira razão de eu te amar.';
}

function mensflor1(){
    document.getElementById('dia-maes').style.visibility = 'hidden';
    document.getElementById('p-maes').style.visibility = 'hidden';
    document.getElementById('mens').style.backgroundColor = '#663399';
    document.getElementById('mens').classList.add('mostrar');
    document.getElementById('p-mens').style.display = 'block';
    document.getElementById('p-mens').innerHTML = 'Por que eu te amo? <br><br> Porque você me ensinou a amar me amando, eu te amo porque você me amou primeiro. <br> Desde quando eu estava em seu ventre você me deu carinho, conversava comigo e cuidava de mim, me dava amor mesmo sem nunca ter me visto, mesmo sem saber como eu seria. <br> E mesmo tendo certeza do tanto de trabalho que eu iria te dar, de todas as fraudas que teria que limpar e de todas as vezes que teria que enxugar o meu choro. <br> Mesmo assim você me amou. <br><br>';
    document.getElementById('flor2').classList.add('pulse');
    document.getElementById('flor1').classList.remove('pulse');
    document.getElementById('p-maes').innerHTML = 'Clique na segunda flor e saberá a segunda razão de eu te amar.';
}

function mensflor2(){
    document.getElementById('dia-maes').style.visibility = 'hidden';
    document.getElementById('p-maes').style.visibility = 'hidden';
    document.getElementById('mens').style.backgroundColor = '#D2527F';
    document.getElementById('mens').classList.add('mostrar');
    document.getElementById('p-mens').style.display = 'block';
    document.getElementById('p-mens').innerHTML = 'Por que eu te amo? <br><br> Te amo porque você sempre me protejeu, do frio e do calor, quando eu era bebe e não conseguia nem mesmo me trocar. <br> Me protegeu dos perigos do mundo, quando me dava a mão para atravessar a rua, ou quando me impedia de maxucar a mim mesmo. <br> Te amo porque você sempre me ajudou em tudo, nas lições da escola e em tantas outras situações. <br> Me ensinou a ter educação, responsabilidade e determinação. <br> Quando me dizem que sou uma boa pessoa, isso não é graças a mim mesmo, mas sim a você e ao papai que sempre me ensinaram o que é certo.<br><br>';
    document.getElementById('flor3').classList.add('pulse');
    document.getElementById('flor2').classList.remove('pulse');
    document.getElementById('p-maes').innerHTML = 'Clique na segunda flor e saberá a terceira razão de eu te amar.';
}

function mensflor3(){
    document.getElementById('dia-maes').style.visibility = 'hidden';
    document.getElementById('p-maes').style.visibility = 'hidden';
    document.getElementById('mens').style.backgroundColor = '#b21c0e';
    document.getElementById('mens').classList.add('mostrar');
    document.getElementById('p-mens').style.display = 'block';
    document.getElementById('p-mens').innerHTML = 'Por que eu te amo? <br><br> Porque você me suportou e me ouviu. <br> Você suportou os meu choros de bebe, as minhas artes de criança, as minhas chatices de adolescente <br> E suporta até hoje o mala sem alça que sou, que não gosta muito de abraços e beijos ou fotos, o rapaz que tem muita saudade do passado, que vive reclamando do presente e que morre de medo do futuro. <br> Você sempre me ouve e me entende, as vezes sem mesmo eu dizer uma palavra. <br> Só espero um dia compensar tanto sacrifício, e orgular você e o papai. <br> Te amo muito mamãe, as vezes eu esqueço de dizer, mas saiba que eu te amo muito.<br><br>';
    document.getElementById('flor3').classList.remove('pulse');
    document.getElementById('p-maes').innerHTML = 'O amor de mãe é um reflexo do amor de Deus que nos envolve em cada momento de nossas vidas. Ele deu esse amor a ela, e ela o deu pra mim.';
    document.getElementById('div-coracao').style.display = 'flex';
    loop_coracao();
}

function ocultarmens(){
    document.getElementById('dia-maes').style.visibility = 'visible';
    document.getElementById('p-maes').style.visibility = 'visible';
    document.getElementById('mens').classList.remove('mostrar');
}

function loop_coracao(){
    var m = 1;
    setInterval(function loop(){
        if (m == 1){
            document.getElementById('teamo').innerHTML = 'Te amo';
            m = 2
        }else if (m == 2){
            document.getElementById('teamo').innerHTML = 'Mil';
            m = 3
        }else if (m == 3){
            document.getElementById('teamo').innerHTML = 'Milhões';
            m = 1
        }
    },2000)
};