import React from 'react';

import { Modal } from '@/components';
import { MODALS_CONFIG } from '@/constants/modals';
import { ModalContext, ModalProvider } from '@/providers';
import { GlobalStyle } from '@/styled/global';

export const Content = () => {
  const { modalId, openModal } = React.useContext(ModalContext);

  const handleModalClose = React.useCallback(() => {
    openModal?.(undefined);
  }, [openModal]);

  // так делать обычно совсем не стоит, но здесь нам нужен наиболее примитивный способ вызова нашего функционала
  // @ts-expect-error
  window.openModal = (id: string) => {
    openModal?.(id);
  };

  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        {MODALS_CONFIG.map(({ children, id, title }) => (
          <Modal
            key={id}
            isVisible={id === modalId}
            onClose={handleModalClose}
            title={title}
          >
            {children}
          </Modal>
        ))}
      </ModalProvider>
    </>
  );
};
