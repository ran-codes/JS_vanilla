import { init } from './init.js';
import currencies from './currencies.js';

// start the app!
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });
