document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const startImgContainer = document.getElementById('img-container');
    const testDescContainer = document.getElementById('test-desc');
    const backButton = document.getElementById('back');
    const mainSection = document.getElementById('main-section');

    if (startButton) {
        startButton.addEventListener('click', function () {
            startContainer.classList.add('hidden');
            startImgContainer.classList.add('hidden');

            setTimeout(() => {
                startContainer.style.display = 'none';
                startImgContainer.style.display = 'none';

                testDescContainer.style.display = 'block'; // Make it block before applying opacity
                requestAnimationFrame(() => { // Ensure the element is rendered before adding class
                    testDescContainer.classList.add('visible');
                });

                mainSection.style.justifyContent = 'center';
                mainSection.style.alignItems = 'center';
            }, 500); // Duración de la transición en milisegundos
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

                // Reset centering styles of mainSection
                mainSection.style.justifyContent = 'space-between';
                mainSection.style.alignItems = 'flex-start';
            }, 500); // Duración de la transición en milisegundos
        });
    }


    const continuarButton = document.getElementById('continuar');

    if (continuarButton) {

        continuarButton.addEventListener('click', function () {
            
            testDescContainer.classList.remove('visible');
            testDescContainer.classList.add('hidden');

            setTimeout(() => {

            testDescContainer.style.display = 'none';
           
            const newContainer = document.createElement('div');
                newContainer.classList.add('col-lg-6', 'new-container', 'visible');
                newContainer.innerHTML = `
                    <h2>Nueva Sección</h2>
                    <p>Esta es una nueva sección generada al presionar el botón continuar.</p>
                `;
            }, 500)

        })
    }















});