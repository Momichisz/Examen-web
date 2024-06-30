document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const startImgContainer = document.getElementById('img-container');

    if (startButton) {
        startButton.addEventListener('click', function () {
            
            startContainer.classList.add('hidden');
            startImgContainer.classList.add('hidden');

            setTimeout(() => {
                startContainer.style.display = 'none';
                startImgContainer.style.display = 'none';
            }, 1000);
        });
    }
});
