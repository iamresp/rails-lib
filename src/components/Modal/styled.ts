import styled from 'styled-components';
import { C_WHITE, C_BORDER, C_OVERLAY_25 } from '@/constants/colors';

export const ModalContainer = styled.div`
  max-width: 1200px;
  max-height: 900px;
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: ${C_WHITE};
  border-radius: 1rem;
  box-shadow 0 0 1rem ${C_OVERLAY_25};
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid ${C_BORDER};
`;

export const ModalBody = styled.article`
  width: 100%;
  flex: 1 1 100%;
  padding: 1rem;
  border-bottom: 1px solid ${C_BORDER};
`;

export const ModalActions = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
