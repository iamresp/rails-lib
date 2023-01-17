import { createContext } from 'react';
import { TModalContext } from './types';

/**
 * Контекст модалок.
 */
export const ModalContext = createContext<TModalContext>({
  modalId: undefined,
});
