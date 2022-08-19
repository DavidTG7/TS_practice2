(()=>{
  let productPrice = 100;
  const twentyDisc = '20';
  let discount = parseInt(twentyDisc);
  let totalPrice = productPrice - productPrice * discount / 100;

  console.log('Total price: ', totalPrice);

})();
