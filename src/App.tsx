import React from 'react';
import { Content } from '@/modules';
import { ModalProvider } from '@/providers';
import { GlobalStyle } from '@/styled/global';

export const App: React.FC<{}> = () => (
  <>
    <GlobalStyle />
    <ModalProvider>
      <Content />
    </ModalProvider>
  </>
);
