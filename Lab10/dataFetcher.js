const fetch = require('node-fetch');

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка сети');
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    return null;
  }
}

module.exports = { fetchData };