import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <section className='container'>{conteudos.map((element) => {
        return (
          <p>{`O conteudo e: ${element.conteudo}`}<br />
          {`Status: ${element.status}`}<br />
          {`Bloco: ${element.bloco}`}<br />
          </p>
        );
      })}
      </section>
    )
  }
}

export default Content;