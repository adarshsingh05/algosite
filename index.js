document.addEventListener('DOMContentLoaded', function() {
    // Use querySelector to select the image by its id
    const darkModeImage = document.querySelector('#dark-mode');
    const darkModeSrc = 'images/dark-mode.png'; // Initial image source
    const instaSrc = 'images/light-mode.png'; // Image source to switch to

    darkModeImage.addEventListener('click', function() {
        // Toggle between darkModeSrc and instaSrc
        if (darkModeImage.src.endsWith(darkModeSrc)) {
            darkModeImage.src = instaSrc;
        } else {
            darkModeImage.src = darkModeSrc;
        }
    });
});
