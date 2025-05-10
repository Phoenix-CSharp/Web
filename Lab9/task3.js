const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.publicapis.org/entries ', true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log('Данные с API:', data.entries.slice(0, 3)); // Вывод первых 3 записей
  } else {
    console.error('Ошибка запроса:', xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error('Ошибка сети');
};

xhr.send();