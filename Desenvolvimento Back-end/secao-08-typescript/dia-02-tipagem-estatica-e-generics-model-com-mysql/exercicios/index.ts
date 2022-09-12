type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

const pizza1: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

//

type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';

type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';

type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface PizzaComum extends Pizza {
  flavor: Comum;
}

const umaPizzaComum: PizzaComum = {
  flavor: 'Frango',
  slices: 6,
}