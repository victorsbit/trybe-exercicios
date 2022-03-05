const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const deliveryTo = Object.values(order)[0];
  const phone = Object.values(order)[1];
  const address = Object.values(order.address)[0];
  const addressNumber = Object.values(order.address)[1];
  const addressAP = Object.values(order.address)[2];

  return console.log(`Olá ${deliveryPerson}, entrega para: ${deliveryTo}, Telefone: ${phone}, R. ${address}, Nº, ${addressNumber}, AP: ${addressAP}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const coke = Object.values(order.order.drinks.coke)[0];
  const newPrice = order.order.drinks.coke.price = 50;

  const fullStr = console.log(`Ola ${newCustomer}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke} e R$ ${newPrice},00.`);
  return fullStr;
  
}

orderModifier(order);
