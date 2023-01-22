export default function colourHealth(obj) {
  const { health } = obj;
  if (health > 50) {
    console.log('%c%s', 'color: green', 'healthy');
    return 'healthy';
  } if (health <= 50 && health > 15) {
    console.log('%c%s', 'color: yellow', 'wounded');
    return 'wounded';
  } if (health <= 15 && health >= 0) {
    console.log('%c%s', 'color: red', 'critical');
    return 'critical';
  }
  return null;
}
