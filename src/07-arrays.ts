(() => {
  let prices: (string | number | boolean) [] = [1, 2, 3, 4, 5,'a'];

  prices.push(true);

  let mult: number[] = [];

  prices.forEach((item) => {
    if (typeof item === 'number') {
      mult.push(item * 2)
    }
  })

  console.log(prices, mult);
})();


