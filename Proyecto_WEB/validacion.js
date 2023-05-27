    document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y se recargue la página

    var respSelec;
    var contador = 0;

    // Pregunta 1
    var pregunta1 = document.getElementsByName("pregunta1");
    for (var i = 0; i < pregunta1.length; i++) {
      if (pregunta1[i].checked) {
        respSelec = pregunta1[i].value;
        break;
      }
    }
    if (respSelec === "opc_2") {
      contador++;
    }

    // Pregunta 2
    var pregunta2 = document.getElementsByName("pregunta2");
    for (var i = 0; i < pregunta2.length; i++) {
      if (pregunta2[i].checked) {
        respSelec = pregunta2[i].value;
        break;
      }
    }
    if (respSelec === "opc_3") {
      contador++;
    }

    // Pregunta 3
    var pregunta3 = document.getElementsByName("pregunta3");
    for (var i = 0; i < pregunta3.length; i++) {
      if (pregunta3[i].checked) {
        respSelec = pregunta3[i].value;
        break;
      }
    }
    if (respSelec === "opc_2") {
      contador++;
    }

    // Pregunta 4
    var pregunta4 = document.getElementsByName("pregunta4");
    for (var i = 0; i < pregunta4.length; i++) {
      if (pregunta4[i].checked) {
        respSelec = pregunta4[i].value;
        break;
      }
    }
    if (respSelec === "opc_1") {
      contador++;
    }

    // Pregunta 5
    var pregunta5 = document.getElementsByName("pregunta5");
    for (var i = 0; i < pregunta5.length; i++) {
      if (pregunta5[i].checked) {
        respSelec = pregunta5[i].value;
        break;
      }
    }
    if (respSelec === "opc_1") {
      contador++;
    }

    // Pregunta 6
    var pregunta6 = document.getElementsByName("pregunta6");
    for (var i = 0; i < pregunta6.length; i++) {
      if (pregunta6[i].checked) {
        respSelec = pregunta6[i].value;
        break;
      }
    }
    if (respSelec === "opc_1") {
      contador++;
    }

    // Pregunta 7
    var pregunta7 = document.getElementsByName("pregunta7");
    for (var i = 0; i < pregunta7.length; i++) {
      if (pregunta7[i].checked) {
        respSelec = pregunta7[i].value;
        break;
      }
    }
    if (respSelec === "opc_3") {
      contador++;
    }

    // Pregunta 8
    var pregunta8 = document.getElementsByName("pregunta8");
    for (var i = 0; i < pregunta8.length; i++) {
      if (pregunta8 [i].checked) {
        respSelec = pregunta8[i].value;
        break;
      }
    }
    if (respSelec === "opc_4") {
      contador++;
    }

    // Pregunta 9
    var pregunta9 = document.getElementsByName("pregunta9");
    for (var i = 0; i < pregunta9.length; i++) {
      if (pregunta9 [i].checked) {
        respSelec = pregunta9[i].value;
        break;
      }
    }
    if (respSelec === "opc_1") {
      contador++;
    }

    // Pregunta 10
    var pregunta10 = document.getElementsByName("pregunta10");
    for (var i = 0; i < pregunta10.length; i++) {
      if (pregunta10 [i].checked) {
        respSelec = pregunta10[i].value;
        break;
      }
    }
    if (respSelec === "opc_1") {
        contador++;
    }
    
    // Pregunta 11
    var pregunta11 = document.getElementsByName("pregunta11");
    for (var i = 1; i < pregunta11.length; i++) {
      if (pregunta11 [i].checked) {
        respSelec = pregunta11[i].value;
        break;
      }
    }
    if (respSelec === "opc_2") {
        contador++;
    }

    // Pregunta 12
    var pregunta12 = document.getElementsByName("pregunta12");
    for (var i = 1; i < pregunta12.length; i++) {
      if (pregunta12 [i].checked) {
        respSelec = pregunta12[i].value;
        break;
      }
    }
    if (respSelec === "opc_3") {
        contador++;
    }

    // Pregunta 13
    var pregunta13 = document.getElementsByName("pregunta13");
    for (var i = 1; i < pregunta13.length; i++) {
      if (pregunta13 [i].checked) {
        respSelec = pregunta13[i].value;
        break;
      }
    }
    if (respSelec === "opc_4") {
        contador++;
    }

    // Pregunta 14
    var pregunta14 = document.getElementsByName("pregunta14");
    for (var i = 1; i < pregunta14.length; i++) {
      if (pregunta14 [i].checked) {
        respSelec = pregunta14[i].value;
        break;
      }
    }
    if (respSelec === "opc_3") {
        contador++;
    }

    // Pregunta 15
    var pregunta15 = document.getElementsByName("pregunta15");
    for (var i = 1; i < pregunta15.length; i++) {
      if (pregunta15 [i].checked) {
        respSelec = pregunta15[i].value;
        break;
      }
    }
    if (respSelec === "opc_4") {
        contador++;
    }

    // Pregunta 16
    var pregunta16 = document.getElementsByName("pregunta16");
    for (var i = 1; i < pregunta16.length; i++) {
      if (pregunta16 [i].checked) {
        respSelec = pregunta16[i].value;
        break;
      }
    }
    if (respSelec === "opc_4") {
        contador++;
    }

    // Pregunta 17
    var pregunta17 = document.getElementsByName("pregunta17");
    for (var i = 1; i < pregunta17.length; i++) {
      if (pregunta17 [i].checked) {
        respSelec = pregunta17[i].value;
        break;
      }
    }
    if(respSelec === "opc_1"){
      contador++;
    }

    // Pregunta 18
    var pregunta18 = document.getElementsByName("pregunta18");
    for (var i = 1; i < pregunta18.length; i++) {
      if (pregunta18 [i].checked) {
        respSelec = pregunta18[i].value;
        break;
      }
    }
    if(respSelec === "opc_1"){
      contador++;
    }

    // Pregunta 19
    var pregunta19 = document.getElementsByName("pregunta19");
    for (var i = 1; i < pregunta19.length; i++) {
      if (pregunta19 [i].checked) {
        respSelec = pregunta19[i].value;
        break;
      }
    }
    if(respSelec === "opc_1"){
      contador++;
    }

    // Pregunta 20
    var pregunta20 = document.getElementsByName("pregunta20");
    for (var i = 1; i < pregunta20.length; i++) {
      if (pregunta20 [i].checked) {
        respSelec = pregunta20[i].value;
        break;
      }
    }
    if(respSelec === "opc_3"){
      contador++;
    }
   



    // Calcula la ponderación
    var ponderacion = (contador / 20) * 100; // Suponiendo que hay 2 preguntas en total

    // Muestra los resultados
    alert('Aciertos: ' + contador + '\nPonderación: ' + ponderacion.toFixed(2) + '%');
  });
