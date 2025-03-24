import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders a header', async () => {
    render(<App />);
   
    const header = await screen.findByRole('heading', { name: /Animal Sightings Tracker/i });
    expect(header).toBeInTheDocument();
  });

  it('passes a basic test', () => {
    expect(true).toBe(true);
  });
});
