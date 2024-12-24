// Получаем значение параметра utm_term
const utmTerm2 = getURLParameter('utm_term');

// Проверяем, если utmTerm2 не пустой и начинается с заглавной буквы
if (utmTerm2 && /^[A-ZА-Я]/.test(utmTerm2)) {
    // Находим все элементы с классом key
    const keyElements = document.querySelectorAll('.key');
    
    // Проходим по всем элементам и устанавливаем текст
    keyElements.forEach((element) => {
        element.textContent = utmTerm2;
    });
}
