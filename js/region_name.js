// Получаем значение параметра utm_term
const regionName2 = getURLParameter('region_name');

// Проверяем, если regionName2 не пустой и начинается с заглавной буквы
if (regionName2 && /^[A-ZА-Я]/.test(regionName2)) {
    // Находим все элементы с классом key
    const regionName2Elements  = document.querySelectorAll('.region_name');
    
    // Проходим по всем элементам и устанавливаем текст
    regionName2Elements .forEach((element) => {
        element.textContent = regionName2;
    });
}