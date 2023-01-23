import colourHealth from '../js/color';

test('should show healthy', () => {
  const received = colourHealth({ name: 'Маг', health: 90 });
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('should show wounded', () => {
  const received = colourHealth({ name: 'Маг', health: 15 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should show critical', () => {
  const received = colourHealth({ name: 'Маг', health: 13 });
  const expected = 'critical';
  expect(received).toBe(expected);
});
