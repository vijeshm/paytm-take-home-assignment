import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { GenericCodeAndNameObject } from '../../types/types';

const items: GenericCodeAndNameObject[] = [];
test('renders learn react link', () => {
  render(<Dropdown items={items} />);
  expect(true).toBe(true);
});
