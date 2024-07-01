document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const startImgContainer = document.getElementById('img-container');
    const testDescContainer = document.getElementById('test-desc');
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

                // Apply centering styles to mainSection
                mainSection.style.justifyContent = 'center';
                mainSection.style.alignItems = 'center';
            }, 500); // Duración de la transición en milisegundos
        });
    }
});
