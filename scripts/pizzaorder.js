let orderCount = 0;
function takeOrder(topping, crustStyle) {
  alert('Order:thin' + ' ' + crustStyle + ' ' + 'pizza' + ' ' + topping);
  orderCount = orderCount + 1;
}

function subTotal(itemCount) {
  return itemCount * 8;
}

takeOrder('chicken', 'egg');
takeOrder('bacan', 'egg');

alert(subTotal(orderCount));
