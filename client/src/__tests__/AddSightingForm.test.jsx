import React from 'react';
import { render, screen } from '@testing-library/react';
import AddSightingForm from '../components/AddSightingForm';

describe('AddSightingForm', () => {
  it('renders the form', () => {
    render(<AddSightingForm />);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});