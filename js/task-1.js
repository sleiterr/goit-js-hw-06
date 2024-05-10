//* Task 1 Задача 1. Акаунт користувача

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance; // Метод getBalance об'єкта customer використовує this
  },
  getDiscount() {
    return this.discount; // Метод getDiscount об'єкта customer використовує this
  },
  setDiscount(value) {
    this.discount = value; // Метод setDiscount об'єкта customer використовує this
  },
  getOrders() {
    return this.orders; // Метод getOrders об'єкта customer використовує this
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  }, //Метод addOrder об'єкта customer використовує this
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
