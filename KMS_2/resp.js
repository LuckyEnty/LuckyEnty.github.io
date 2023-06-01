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
    
   

    // Calcula la ponderación
    var ponderacion = (contador / 10) * 100; 

    // Muestra los resultados
    alert('Aciertos: ' + contador + '\nPonderación: ' + ponderacion.toFixed(2) + '%');
  });
