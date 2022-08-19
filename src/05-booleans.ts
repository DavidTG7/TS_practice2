(() => {
  let isEnable = true;

  let isNew: boolean = false;

  console.log(isEnable, isNew);

  const random = Math.random();
  console.log(random);
  isNew = random > 0.5;
  console.log(isNew);

})();
