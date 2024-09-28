// Получаем все заголовки аккордеона
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Добавляем обработчик событий для каждого заголовка
accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
        const accordionItem = this.parentElement;

        // Если элемент уже активен, закрываем его
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
        } else {
            // Закрываем все остальные активные элементы
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                item.classList.remove('active');
            });

            // Открываем текущий элемент
            accordionItem.classList.add('active');
        }
    });
});
