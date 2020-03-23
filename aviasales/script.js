// Элементы

const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
    inputDateDepart = formSearch.querySelector('.input__date-depart');

// Данные

const city = ['Махачкала', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск',
    'Керч', 'Волгоград', 'Самара', 'Днепропетровск', 'Екатеринбург', 'Одесса',
    'Ухань', 'Шимкент', 'Нижний Новгород', 'Калининград', 'Вацлав'];

// Функции

const getData = () => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.send();


};

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {

        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li)
        });
    }
};

const selectCity = (event, input, list) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
};

// Обработчики событий

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesFrom.addEventListener('click', () => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesTo.addEventListener('click', () => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo)
});

// Вызовы функций

getData(proxy + citiesApi, (data) => {
    console.log(data);
});


