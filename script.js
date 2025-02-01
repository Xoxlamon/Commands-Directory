// Создаем 50 кнопок динамически
const buttonsContainer = document.getElementById('buttons-container');

for (let i = 1; i <= 50; i++) {
    const button = document.createElement('button');
    button.textContent = `Кнопка ${i}`;
    button.addEventListener('click', () => {
        alert(`Вы нажали на кнопку ${i}`);
    });
    buttonsContainer.appendChild(button);
}