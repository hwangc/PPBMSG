import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('PPB MSG', () => {
  describe('renders the screen', () => {
    test('renders without crashing', () => {
      const rendered = renderer.create(<App />).toJSON();
      expect(rendered).toBeTruthy();
    });
  });
});
