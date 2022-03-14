const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (productList, priceList) => productList.map((element, index) => ({ [element]: priceList[index] }));

console.log(listProducts(products, prices));

// --------
