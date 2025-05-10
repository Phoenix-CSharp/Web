// Получение случайного факта о котах
fetch('https://catfact.ninja/fact ')
  .then(response => response.json())
  .then(data => {
    document.getElementById('catFact').textContent = data.fact;
  })
  .catch(error => console.error('Ошибка:', error));

// Получение случайного пользователя
fetch('https://randomuser.me/api/ ')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    document.getElementById('randomUser').textContent = `Имя: ${fullName}, Email: ${email}`;
  })
  .catch(error => console.error('Ошибка:', error));