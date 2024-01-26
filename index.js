let shoppingCart = { //cоздание объекта корзины
  items: [], //массив объектов товаров
  total: 0, //общая стоимость товаров в корзине


  addItem: function(name, price, quantity) { //добавление товара в массив
    this.items.push({ name, price, quantity });
    this.calculateTotal(); //добавляем общую стоимость в функцию calculateTotal
  },

  removeItem: function(name) { //удаление товара
    this.items = this.items.filter(item => item.name !== name); //товар с указанным названием будет удален из корзины
    this.calculateTotal(); //минусуем стоимость в функцию calculateTotal
  },

  updateQuantity: function(name, quantity) { //обновления кол-ва товаров
    this.items.forEach(item => { //код перебирает каждый элемент в массиве items корзины покупок
      if (item.name === name) {  //совпадает ли его название с указанным name
        item.quantity = quantity; //обновляется значение количества
      }
    });
    this.calculateTotal(); //добавляем общую стоимость в функцию calculateTotal
  },

  calculateTotal: function() { //общая стоимость
    this.total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0); // используется метод массива reduce, чтобы вычислить общую стоимость товаров-элементов масива в корзине
  },

  clearCart: function() { //очистка корзины
    this.items = [];
    this.total = 0;
  }
};
