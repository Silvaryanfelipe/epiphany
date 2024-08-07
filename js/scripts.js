document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('modeToggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Modo Claro';
        } else {
            toggleButton.textContent = 'Modo Escuro';
        }
    });
});
