document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y se recargue la página

    var respSelec;
    var contador = 0;

    // Pregunta 1
    var pregunta1 = document.querySelector('input[name="pregunta1"]:checked');
    if (pregunta1 && pregunta1.value === 'opc_4') {
    contador++;
    }

    // Pregunta 2
    var pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    if (pregunta2 && pregunta2.value === 'opc_2') {
    contador++;
    }

    // Pregunta 3
    var pregunta3 = document.querySelector('input[name="pregunta3"]:checked');
    if (pregunta3 && pregunta3.value === 'opc_3') {
    contador++;
    }

    // Pregunta 4
    var pregunta4 = document.querySelector('input[name="pregunta4"]:checked');
    if (pregunta4 && pregunta4.value === 'opc_3') {
    contador++;
    }

    // Pregunta 5
    var pregunta5 = document.querySelector('input[name="pregunta5"]:checked');
    if (pregunta5 && pregunta5.value === 'opc_1') {
    contador++;
    }

    // Pregunta 6
    var pregunta6 = document.querySelector('input[name="pregunta6"]:checked');
    if (pregunta6 && pregunta6.value === 'opc_2') {
    contador++;
    }

    // Pregunta 7
    var pregunta7 = document.querySelector('input[name="pregunta7"]:checked');
    if (pregunta7 && pregunta7.value === 'opc_4') {
    contador++;
    }

    // Pregunta 8
    var pregunta8 = document.querySelector('input[name="pregunta8"]:checked');
    if (pregunta8 && pregunta8.value === 'opc_2') {
    contador++;
    }

    // Pregunta 9
    var pregunta9 = document.querySelector('input[name="pregunta9"]:checked');
    if (pregunta9 && pregunta9.value === 'opc_4') {
    contador++;
    }

    // Pregunta 10
    var pregunta10 = document.querySelector('input[name="pregunta10"]:checked');
    if (pregunta10 && pregunta10.value === 'opc_1') {
    contador++;
    }

    // Pregunta 11
    var pregunta11 = document.querySelector('input[name="pregunta11"]:checked');
    if (pregunta11 && pregunta11.value === 'opc_4') {
    contador++;
    }

    // Pregunta 12
    var pregunta12 = document.querySelector('input[name="pregunta12"]:checked');
    if (pregunta12 && pregunta12.value === 'opc_1') {
    contador++;
    }
    
    // Pregunta 13
    var pregunta13 = document.querySelector('input[name="pregunta13"]:checked');
    if (pregunta13 && pregunta13.value === 'opc_2') {
    contador++;
    }

    // Pregunta 14
    var pregunta14 = document.querySelector('input[name="pregunta14"]:checked');
    if (pregunta14 && pregunta14.value === 'opc_3') {
    contador++;
    }

    // Pregunta 15
    var pregunta15 = document.querySelector('input[name="pregunta15"]:checked');
    if (pregunta15 && pregunta15.value === 'opc_1') {
    contador++;
    }

    // Pregunta 16
    var pregunta16 = document.querySelector('input[name="pregunta16"]:checked');
    if (pregunta16 && pregunta16.value === 'opc_4') {
    contador++;
    }

    // Pregunta 17
    var pregunta17 = document.querySelector('input[name="pregunta17"]:checked');
    if (pregunta17 && pregunta17.value === 'opc_1') {
    contador++;
    }

    // Pregunta 18
    var pregunta18 = document.querySelector('input[name="pregunta18"]:checked');
    if (pregunta18 && pregunta18.value === 'opc_2') {
    contador++;
    }

    // Pregunta 19
    var pregunta19 = document.querySelector('input[name="pregunta19"]:checked');
    if (pregunta19 && pregunta19.value === 'opc_4') {
    contador++;
    }

    // Pregunta 20
    var pregunta20 = document.querySelector('input[name="pregunta20"]:checked');
    if (pregunta20 && pregunta20.value === 'opc_3') {
    contador++;
    }
    

    // Calcula la ponderación
    var ponderacion = (contador / 10) * 100; 

    // Muestra los resultados
    alert('Aciertos: ' + contador + '\nPonderación: ' + ponderacion.toFixed(2) + '%');
  });
