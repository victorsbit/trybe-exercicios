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

/* 
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
 */