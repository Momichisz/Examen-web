document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const startImgContainer = document.getElementById('img-container');
    const testDescContainer = document.getElementById('test-desc');
    const backButton = document.getElementById('back');
    const mainSection = document.getElementById('main-section');
    let puntaje = 0;

    let preguntas = [{
            pregunta: "¿Cuál es la capital de Francia?",
            respuestaCorrecta: "París",
            respuestaIncorrecta1: "Berlín",
            respuestaIncorrecta2: "Madrid",
            respuestaIncorrecta3: "Roma"
        },
        {
            pregunta: "¿En qué continente se encuentra Egipto?",
            respuestaCorrecta: "África",
            respuestaIncorrecta1: "Asia",
            respuestaIncorrecta2: "Europa",
            respuestaIncorrecta3: "América del Sur"
        },
        {
            pregunta: "¿Cuál es el río más largo del mundo?",
            respuestaCorrecta: "Amazonas",
            respuestaIncorrecta1: "Yangtsé",
            respuestaIncorrecta2: "Nilo",
            respuestaIncorrecta3: "Misisipi"
        },
        {
            pregunta: "¿Qué país tiene la mayor cantidad de islas?",
            respuestaCorrecta: "Suecia",
            respuestaIncorrecta1: "Indonesia",
            respuestaIncorrecta2: "Filipinas",
            respuestaIncorrecta3: "Japón"
        },
        {
            pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
            respuestaCorrecta: "1939",
            respuestaIncorrecta1: "1914",
            respuestaIncorrecta2: "1950",
            respuestaIncorrecta3: "1945"
        },
        {
            pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
            respuestaCorrecta: "George Washington",
            respuestaIncorrecta1: "Thomas Jefferson",
            respuestaIncorrecta2: "Abraham Lincoln",
            respuestaIncorrecta3: "John Adams"
        },
        {
            pregunta: "¿Cuál fue la civilización que construyó las pirámides de Giza?",
            respuestaCorrecta: "Egipcios",
            respuestaIncorrecta1: "Romanos",
            respuestaIncorrecta2: "Griegos",
            respuestaIncorrecta3: "Mayas"
        },
        {
            pregunta: "¿Quién fue conocido como el 'Libertador' de América del Sur?",
            respuestaCorrecta: "Simón Bolívar",
            respuestaIncorrecta1: "José de San Martín",
            respuestaIncorrecta2: "Miguel Hidalgo",
            respuestaIncorrecta3: "Bernardo O'Higgins"
        },
        {
            pregunta: "¿Qué evento marcó el inicio de la Revolución Francesa?",
            respuestaCorrecta: "La toma de la Bastilla",
            respuestaIncorrecta1: "La coronación de Napoleón",
            respuestaIncorrecta2: "La Declaración de los Derechos del Hombre",
            respuestaIncorrecta3: "La ejecución de Luis XVI"
        },
        {
            pregunta: "¿Qué país fue el primero en enviar un ser humano al espacio?",
            respuestaCorrecta: "Rusia",
            respuestaIncorrecta1: "Estados Unidos",
            respuestaIncorrecta2: "China",
            respuestaIncorrecta3: "Alemania"
        },
        {
            pregunta: "¿Cuál es el elemento químico más abundante en el universo?",
            respuestaCorrecta: "Hidrógeno",
            respuestaIncorrecta1: "Helio",
            respuestaIncorrecta2: "Oxígeno",
            respuestaIncorrecta3: "Carbono"
        },
        {
            pregunta: "¿Quién formuló la teoría de la relatividad?",
            respuestaCorrecta: "Albert Einstein",
            respuestaIncorrecta1: "Isaac Newton",
            respuestaIncorrecta2: "Nikola Tesla",
            respuestaIncorrecta3: "Galileo Galilei"
        },
        {
            pregunta: "¿Cómo se llama el proceso por el cual las plantas convierten la luz solar en energía?",
            respuestaCorrecta: "Fotosíntesis",
            respuestaIncorrecta1: "Respiración",
            respuestaIncorrecta2: "Fermentación",
            respuestaIncorrecta3: "Evaporación"
        },
        {
            pregunta: "¿Qué planeta es conocido como el 'planeta rojo'?",
            respuestaCorrecta: "Marte",
            respuestaIncorrecta1: "Júpiter",
            respuestaIncorrecta2: "Saturno",
            respuestaIncorrecta3: "Venus"
        },
        {
            pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
            respuestaCorrecta: "Miguel de Cervantes",
            respuestaIncorrecta1: "Gabriel García Márquez",
            respuestaIncorrecta2: "William Shakespeare",
            respuestaIncorrecta3: "Jorge Luis Borges"
        },
        {
            pregunta: "¿Cuál es la obra más famosa de William Shakespeare?",
            respuestaCorrecta: "'Hamlet'",
            respuestaIncorrecta1: "'La Odisea'",
            respuestaIncorrecta2: "'Don Quijote'",
            respuestaIncorrecta3: "'Cien años de soledad'"
        },
        {
            pregunta: "¿Quién es el autor de 'Cien años de soledad'?",
            respuestaCorrecta: "Gabriel García Márquez",
            respuestaIncorrecta1: "Mario Vargas Llosa",
            respuestaIncorrecta2: "Pablo Neruda",
            respuestaIncorrecta3: "Julio Cortázar"
        },
        {
            pregunta: "¿Qué novela comienza con la frase 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...'",
            respuestaCorrecta: "'Don Quijote de la Mancha'",
            respuestaIncorrecta1: "'Cien años de soledad'",
            respuestaIncorrecta2: "'La Odisea'",
            respuestaIncorrecta3: "'Crimen y castigo'"
        },
        {
            pregunta: "¿Quién pintó la Mona Lisa?",
            respuestaCorrecta: "Leonardo da Vinci",
            respuestaIncorrecta1: "Vincent van Gogh",
            respuestaIncorrecta2: "Pablo Picasso",
            respuestaIncorrecta3: "Claude Monet"
        },
        {
            pregunta: "¿En qué país se encuentra el Museo del Prado?",
            respuestaCorrecta: "España",
            respuestaIncorrecta1: "Francia",
            respuestaIncorrecta2: "Italia",
            respuestaIncorrecta3: "Alemania"
        },
        {
            pregunta: "¿Cuál es la escultura más famosa de Miguel Ángel?",
            respuestaCorrecta: "El David",
            respuestaIncorrecta1: "La Venus de Milo",
            respuestaIncorrecta2: "El Pensador",
            respuestaIncorrecta3: "El Discóbolo"
        },
        {
            pregunta: "¿Quién es conocido por pintar el techo de la Capilla Sixtina?",
            respuestaCorrecta: "Miguel Ángel",
            respuestaIncorrecta1: "Rafael",
            respuestaIncorrecta2: "Leonardo da Vinci",
            respuestaIncorrecta3: "Caravaggio"
        },
        {
            pregunta: "¿Cuál es el grupo de rock británico conocido por canciones como 'Hey Jude' y 'Let It Be'?",
            respuestaCorrecta: "The Beatles",
            respuestaIncorrecta1: "The Rolling Stones",
            respuestaIncorrecta2: "Led Zeppelin",
            respuestaIncorrecta3: "Queen"
        },
        {
            pregunta: "¿Qué compositor es conocido por sus sinfonías, como la Quinta y la Novena?",
            respuestaCorrecta: "Ludwig van Beethoven",
            respuestaIncorrecta1: "Johann Sebastian Bach",
            respuestaIncorrecta2: "Frédéric Chopin",
            respuestaIncorrecta3: "Wolfgang Amadeus Mozart"
        },
        {
            pregunta: "¿Quién es el autor de la ópera 'La Traviata'?",
            respuestaCorrecta: "Giuseppe Verdi",
            respuestaIncorrecta1: "Giacomo Puccini",
            respuestaIncorrecta2: "Richard Wagner",
            respuestaIncorrecta3: "Georges Bizet"
        },
        {
            pregunta: "¿Cuál es el género musical originario de Nueva Orleans, caracterizado por su improvisación?",
            respuestaCorrecta: "Jazz",
            respuestaIncorrecta1: "Blues",
            respuestaIncorrecta2: "Rock and Roll",
            respuestaIncorrecta3: "Reggae"
        },
        {
            pregunta: "¿Quién dirigió la película 'Titanic'?",
            respuestaCorrecta: "James Cameron",
            respuestaIncorrecta1: "Steven Spielberg",
            respuestaIncorrecta2: "Martin Scorsese",
            respuestaIncorrecta3: "Francis Ford Coppola"
        },
        {
            pregunta: "¿Qué actor interpretó a Jack Sparrow en 'Piratas del Caribe'?",
            respuestaCorrecta: "Johnny Depp",
            respuestaIncorrecta1: "Orlando Bloom",
            respuestaIncorrecta2: "Brad Pitt",
            respuestaIncorrecta3: "Robert Downey Jr."
        },
        {
            pregunta: "¿Cuál es la película con más premios Óscar en la historia?",
            respuestaCorrecta: "'Titanic'",
            respuestaIncorrecta1: "'Lo que el viento se llevó'",
            respuestaIncorrecta2: "'El Señor de los Anillos: El Retorno del Rey'",
            respuestaIncorrecta3: "'Ben-Hur'"
        },
        {
            pregunta: "¿Quién es el director de 'Pulp Fiction'?",
            respuestaCorrecta: "Quentin Tarantino",
            respuestaIncorrecta1: "Christopher Nolan",
            respuestaIncorrecta2: "Ridley Scott",
            respuestaIncorrecta3: "David Fincher"
        }
    ];

    let preguntasSeleccionadas = [];

    //////////////////////////////////////////////////////////////

    if (startButton) {
        startButton.addEventListener('click', function () {
            startContainer.classList.add('hidden');
            startImgContainer.classList.add('hidden');
    
            setTimeout(() => {
                startContainer.style.display = 'none';
                startImgContainer.style.display = 'none';
    
                testDescContainer.style.display = 'block';
                requestAnimationFrame(() => { 
                    testDescContainer.classList.add('visible');
                });
    
                mainSection.style.justifyContent = 'center';
                mainSection.style.alignItems = 'center';
    
               
                generarNuevaPregunta();
            }, 500); 
        });
    }
    
    if (backButton) {
        backButton.addEventListener('click', function () {
            testDescContainer.classList.remove('visible');
            testDescContainer.classList.add('hidden');
    
            setTimeout(() => {
                testDescContainer.style.display = 'none';
    
                startContainer.style.display = 'flex';
                startImgContainer.style.display = 'flex';
    
                requestAnimationFrame(() => {
                    startContainer.classList.remove('hidden');
                    startImgContainer.classList.remove('hidden');
                });
    
                
                mainSection.style.justifyContent = 'space-between';
                mainSection.style.alignItems = 'flex-start';
            }, 500); 
        });
    }
    
    /////////////////////////////////////////////////////////////////////////////
    
    function generarPregunta() {
        const preguntaRandom = preguntas[Math.floor(Math.random() * preguntas.length)];
        return preguntaRandom;
    }
    
    function mezclarRespuestas(pregunta) {
        const respuestas = [
            pregunta.respuestaCorrecta,
            pregunta.respuestaIncorrecta1,
            pregunta.respuestaIncorrecta2,
            pregunta.respuestaIncorrecta3
        ];
        for (let i = respuestas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
        }
        return respuestas;
    }
    
    /////////////////////////////////////////////////////////////////////////////
    
    let contadorPregunta = 0;
    const totalPreguntas = 10;
    
    function generarNuevaPregunta() {
        if (contadorPregunta >= totalPreguntas) {
            const endContainer = document.createElement('div');
            endContainer.classList.add('col-lg-6', 'final', 'visible');
            endContainer.id('mensaje-final');
            newContainer.innerHTML = `
            <div class="card">
                
                <div class="card-body bodycardpregunta">
                    
                </div>
                <div class="card-footer custom-position-footer">
                    <span class = "text-muted"> ${contadorPregunta} de ${totalPreguntas} preguntas </span>
                    <button type="button" class="btn btn-primary" id="siguiente" style="display: none;">Continuar</button>
                </div>
            </div>`;

            return;
        }
    
        contadorPregunta++;
        const preguntaSeleccionada = generarPregunta();
        const respuestasMezcladas = mezclarRespuestas(preguntaSeleccionada);
    
        testDescContainer.classList.remove('visible');
        testDescContainer.classList.add('hidden');
    
        setTimeout(() => {
            testDescContainer.style.display = 'none';
    
            const newContainer = document.createElement('div');
            newContainer.classList.add('col-lg-6', 'new-container', 'visible');
            newContainer.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <div> Pregunta número  <span class = "texto-destacado">#${contadorPregunta} </span> </div>
                        <div id="temporizador" class="temporizador">15</div>
                    </div>
                    <div class="card-body bodycardpregunta">
                        <h5 class="card-title pb-2">${preguntaSeleccionada.pregunta}</h5>
                        ${respuestasMezcladas.map(opcion => `
                            <button class="botonsito opcion" data-value="${opcion}">${opcion}</button>
                        `).join('')}
                    </div>
                    <div class="card-footer custom-position-footer">
                        <span class = "text-muted"> ${contadorPregunta} de ${totalPreguntas} preguntas </span>
                        <button type="button" class="btn btn-primary" id="siguiente" style="display: none;">Continuar</button>
                    </div>
                </div>`;
    
            mainSection.appendChild(newContainer);
    
            const siguientePregunta = newContainer.querySelector('#siguiente');
            const botonesOpcion = newContainer.querySelectorAll('.opcion');
    
            const temporizadorElemento = newContainer.querySelector('#temporizador');
            let tiempoRestante = 15;
    
            // Temporizador de 15 segundos
            const intervalo = setInterval(() => {
                tiempoRestante -= 1;
                temporizadorElemento.textContent = tiempoRestante;
                if (tiempoRestante <= 0) {
                    clearInterval(intervalo);
                    desactivarBotones();
                }
            }, 1000);
    
            botonesOpcion.forEach(boton => {
                boton.addEventListener('click', function () {
                    siguientePregunta.style.display = 'block';
                    const seleccion = boton.getAttribute('data-value');
    
                    clearInterval(intervalo);
                    desactivarBotones();
    
                    botonesOpcion.forEach(btn => btn.disabled = true);
    
                    botonesOpcion.forEach(btn => {
                        if (btn.getAttribute('data-value') === preguntaSeleccionada.respuestaCorrecta) {
                            btn.classList.add('correcto');
                        } else if (btn.getAttribute('data-value') === seleccion) {
                            btn.classList.add('incorrecto');
                        }
                    });
                });
            });
    
            siguientePregunta.addEventListener('click', function () {
                newContainer.remove();
                generarNuevaPregunta();
            });
    
            function desactivarBotones() {
                botonesOpcion.forEach(btn => {
                    btn.disabled = true;
                    if (btn.getAttribute('data-value') === preguntaSeleccionada.respuestaCorrecta) {
                        btn.classList.add('correcto');
                    } else if (!btn.classList.contains('correcto') && !btn.classList.contains('incorrecto')) {
                        btn.classList.add('incorrecto');
                    }
                });
                siguientePregunta.style.display = 'block';
            }
        }, 500);
    }
    















});