let stock = [10, 0, 5, 8, 0, 3];
let outOfStock = 0;
for (let i = 0; i < stock.length; i++) {
  if (i === 0) {
    outOfStock += i;
    console.log(stock[i]);
  }
}
