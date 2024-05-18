document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Aggiunto!';
            button.style.backgroundColor = '#4caf50';
            setTimeout(() => {
                button.textContent = 'Aggiungi al carrello';
                button.style.backgroundColor = '#5a5abf';
            }, 2000);
        });
    });
});
