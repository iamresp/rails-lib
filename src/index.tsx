import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { detectCollision, getDirection, getObject } from './utils/physics';
import { populateWindow } from './utils/window';

/**
 * Экспоуз методов для взаимодействия с физикой в контекст окна.
 */
populateWindow({
  detectCollision,
  getDirection,
  getObject,
});

/**
 * Не используем действительный элемент в качестве рута.
 * Весь функционал должен работать только через порталы.
 */
const element = document.createElement('div');
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
