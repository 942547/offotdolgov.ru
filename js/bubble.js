document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.bubble, .b24-form-btn'); // Выбираем и '.bubble' и '.b24-form-btn'

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const numBubbles = 5;
            const numBubbles2 = 7;

            for (let i = 0; i < numBubbles + numBubbles2; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add(i < numBubbles ? 'bubbles' : 'bubbles2');
                button.appendChild(bubble);

                const x2 = Math.random() * (button.offsetWidth + 20) * (Math.random() < 0.5 ? -1 : 1);
                const y2 = Math.random() * (button.offsetHeight + 20) * (Math.random() < 0.5 ? -1 : 1);
                bubble.style.setProperty('--translate-x2', x2 + 'px');
                bubble.style.setProperty('--translate-y2', y2 + 'px');

                const x1 = x2 / 1.5;
                const y1 = y2 / 1.5;
                bubble.style.setProperty('--translate-x1', x1 + 'px');
                bubble.style.setProperty('--translate-y1', y1 + 'px');

                bubble.addEventListener('animationend', function () {
                    button.removeChild(bubble);
                });
            }
        });
    });
});