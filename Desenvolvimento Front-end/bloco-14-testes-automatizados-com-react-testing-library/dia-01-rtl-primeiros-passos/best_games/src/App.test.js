import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('Testa a aplicacao', () => {

  it('aparece "carregando..."', () => {
    render(<App />);
    const loading = screen.getByText('Carregando...');
    expect(loading).toBeInTheDocument();
  });

  it('jogo com o texto "Minecraft" esta na tela', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.getByText('Carregando...'));
    const title = screen.getByText('Minecraft');
    expect(title).toBeInTheDocument();
  });

  it('verifica se a pagina de detalhes contem as informacoes necessarias', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.getByText('Carregando...'));
    const btn = screen.getAllByText(/detalhes/i);
    expect(btn[0]).toBeInTheDocument();
    userEvent.click(btn[0]);
    const sales = await screen.findByText(/sales/i);
    const release = await screen.findByText(/release year/i);
    expect(sales).toBeInTheDocument();
    expect(release).toBeInTheDocument();
  });
})
