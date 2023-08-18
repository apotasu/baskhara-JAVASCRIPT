// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
document.getElementById('calcular').addEventListener('click', () => {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let c = document.getElementById('c').value;
  baskhara(a, b, c);
});
function baskhara(a, b, c) {
  let delta = b * b - 4 - a * c;
  if (delta < 0) {
    document.getElementById('x1').innerHTML = '';
    document.getElementById('x2').innerHTML = '';
    document.getElementById('error').innerHTML = 'delta negativo';
  } else {
    let raizdelta = Math.sqrt(delta);

    let o = ((b * -1 + raizdelta) / 2) * a;

    let v = ((b * -1 - raizdelta) / 2) * a;

    document.getElementById('x1').innerHTML = o;
    document.getElementById('x2').innerHTML = v;
  }
}
