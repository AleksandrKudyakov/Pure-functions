import { default as colourHealth } from '../js/color';
import { default as param } from '../js/params';

test('To have params "health"', () => {
  expect(param).toHaveProperty('health');
});

test('Returned right value', () => {
  if (param.health > 50) {
    expect(colourHealth(param)).toBe('healthy');
  } else if (param.health <= 50 && param.health > 15) {
    expect(colourHealth(param)).toBe('wounded');
  } else if (param.health <= 15 && param.health > 0) {
    expect(colourHealth(param)).toBe('critical');
  }
});

test('Check all value', () => {
  for (let i = 0; i < 100; i += 5) {
    const obj = {};
    obj.health = i;
    expect(colourHealth(obj)).toBeTruthy();
  }
});

test('Not undefined', () => {
  expect(colourHealth(param)).not.toBeUndefined();
});

test('Not null', () => {
  expect(colourHealth(param)).not.toBeNull();
});

test('Is null', () => {
  const obj = {};
  obj.health = -1;
  expect(colourHealth(obj)).toBeNull();
});
