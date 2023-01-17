import React from 'react';
import { createPortal } from 'react-dom';
import { Button, Overlay } from '@/styled/common';
import { ModalActions, ModalBody, ModalContainer, ModalHeader } from './styled';

type TProps = {
  children: React.ReactElement | React.ReactElement[];
  isVisible?: boolean;
  onClose?: () => void;
  title: string | React.ReactElement;
};

export const Modal: React.FC<TProps> = ({ children, isVisible, onClose, title }) => isVisible
  ? createPortal(
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalActions>
          <Button onClick={onClose}>Закрыть</Button>
        </ModalActions>
      </ModalContainer>
    </Overlay>,
    document.body,
  )
  : null;
