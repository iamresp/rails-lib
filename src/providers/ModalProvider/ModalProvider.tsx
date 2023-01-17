import React from 'react';
import { ModalContext } from './context';
import { TModalContextValues } from './types';

const INITIAL_STATE = {
  modalId: undefined,
};

type TProps = {
  children: React.ReactNode;
};

/**
 * Провайдер контекста модалок.
 */
export const ModalProvider: React.FC<TProps> = ({ children }) => {
  const [modalState, setModalState] = React.useState<TModalContextValues>(INITIAL_STATE);

  const updateModalState = (newContext: Partial<TModalContextValues>): void => {
    setModalState(prevContext => ({ ...prevContext, ...newContext }));
  };

  const openModal = (modalId: string | undefined): void => {
    updateModalState({
      modalId,
    });
  };

  return (
    <ModalContext.Provider value={{
      ...modalState,
      openModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
