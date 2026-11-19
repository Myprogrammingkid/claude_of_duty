import './style.css';
import { Game } from './core/Game';

const app = document.getElementById('app');
if (!app) throw new Error('#app element missing');

const game = new Game(app);
game.start();

// Exposed for debugging in the browser console.
(window as unknown as { game: Game }).game = game;
