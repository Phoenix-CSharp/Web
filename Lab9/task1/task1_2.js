const intervalId = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Случайное число: ${randomNum}`);
  }, 2000);
  
  // Остановка через 10 секунд
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Интервал остановлен.");
  }, 10000);