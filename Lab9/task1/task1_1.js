let counter = 1;
const maxIterations = 5;

const interval = setInterval(() => {
  console.log(`Повторение №${counter}`);
  if (counter === maxIterations) {
    clearInterval(interval);
  }
  counter++;
}, 1000);