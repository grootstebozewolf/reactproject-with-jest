// __tests__/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App'; // Adjust the import based on your alias configuration

test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
});

test('renders the title Vite + React', () => {
    render(<App />);
    const titleElement = screen.getByText(/Vite \+ React/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders the button and handles click events', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
});

test('displays edit prompt', () => {
    render(<App />);

    // Select element by data-testid
    const editPrompt = screen.getByTestId('edit-instruction');
    expect(editPrompt).toBeInTheDocument();
    expect(editPrompt).toHaveTextContent('Edit src/App.tsx and save to test HMR');
});

test('renders links to Vite and React docs', () => {
    render(<App />);
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    const reactLink = screen.getByRole('link', { name: /react logo/i });
    expect(viteLink).toHaveAttribute('href', 'https://vitejs.dev');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
});
