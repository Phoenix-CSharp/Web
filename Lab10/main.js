const { fetchData } = require('./dataFetcher');
const { power } = require('./powerFunction');

async function main() {
  const data = await fetchData('https://api.publicapis.org/entries ');
  if (data && data.entries && data.entries.length > 0) {
    console.log('Пример данных с API:', data.entries[0]);
  }

  const result = power(3, 4);
  console.log('3^4 =', result);
}

main();