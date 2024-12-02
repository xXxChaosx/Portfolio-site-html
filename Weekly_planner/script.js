function saveData() {
    // Проходимо через всі елементи на сторінці: чекбокси, текстові поля та текстові зони
    document.querySelectorAll('input[type="checkbox"], input[type="text"], textarea').forEach(input => {
        if (input.type === "checkbox") {
            // Зберігаємо стан чекбокса (відмічений чи ні)
            localStorage.setItem(input.id, input.checked);
        } else {
            // Зберігаємо текстове значення
            localStorage.setItem(input.id, input.value);
        }
    });
}

function loadData() {
    // Завантажуємо значення з localStorage для кожного елемента
    document.querySelectorAll('input[type="checkbox"], input[type="text"], textarea').forEach(input => {
        if (input.type === "checkbox") {
            // Встановлюємо стан чекбокса при завантаженні сторінки
            input.checked = localStorage.getItem(input.id) === "true";
        } else {
            // Встановлюємо значення текстового поля чи textarea
            input.value = localStorage.getItem(input.id) || "";
        }
    });
}

window.onload = function() {
    loadData();

    // Додаємо слухачів подій для збереження даних при зміні
    document.querySelectorAll('input[type="checkbox"], input[type="text"], textarea').forEach(input => {
        input.addEventListener("change", saveData);
    });
};
