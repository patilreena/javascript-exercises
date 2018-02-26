let orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order:' + crustType + 'crust pizza topped with' + topping);
  orderCount = orderCount + 1;
  // orderCount = orderCount * 10;
}

function getSubTotal(itemCount) {
  return itemCount * 10;
}

function getTax() {
  return getSubTotal(orderCount) * 20;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('chicken', 'thin');

console.log(getSubTotal(orderCount));

console.log(getTotal());
