import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

type Charger = {
  uid: string;
  name: string;
  initializedOn: string;
  lastPing: string;
  status: string;
  operationalStatus: string;
  energyDispensed: number;
  ownerName: string;
  phoneNumber: string;
  alternatePhone1: string;
  alternatePhone2: string;
};

const mockCharger: Charger = {
  uid: 'charger-1',
  name: 'Test Charger',
  initializedOn: '2024-01-01',
  lastPing: '2024-07-01',
  status: 'active',
  operationalStatus: 'operational',
  energyDispensed: 100,
  ownerName: 'John Doe',
  phoneNumber: '123-456-7890',
  alternatePhone1: '987-654-3210',
  alternatePhone2: '555-555-5555',
};

const ChargerDetails: React.FC<{ charger: Charger; onClose: () => void }> = ({ charger, onClose }) => {
  return (
    <div>
      <h2>Charger Info</h2>
      <div>
        <p>
          UID: <span>{charger.uid}</span>
        </p>
        <p>
          Name: <span>{charger.name}</span>
        </p>
        {/* Render other charger details */}
      </div>
      <h2>Owner Info</h2>
      <div>
        <p>
          Owner Name: <span>{charger.ownerName}</span>
        </p>
        <p>
          Phone Number: <span>{charger.phoneNumber}</span>
        </p>
        {/* Render other owner details */}
      </div>
      {/* Add close button logic */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

describe('ChargerDetails Component', () => {
  test('renders charger details correctly', () => {
    render(<ChargerDetails charger={mockCharger} onClose={() => {}} />);
    
    expect(screen.getByText((content, element) => {
      return element?.textContent === `UID: ${mockCharger.uid}`;
    })).toBeTruthy();

    expect(screen.getByText((content, element) => {
      return element?.textContent === `Name: ${mockCharger.name}`;
    })).toBeTruthy();

    expect(screen.getByRole('heading', { name: /Charger Info/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /Owner Info/i })).toBeTruthy();
  });

  test('calls onClose function when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<ChargerDetails charger={mockCharger} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});
