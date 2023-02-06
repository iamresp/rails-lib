import React from 'react';
import hrVideo from '@/assets/video/hr.mp4';
import { Line, Speech } from '@/components';
import { Column, Wrapper } from '@/styled/dialogs';

export const MODALS_CONFIG = [
  {
    id: 'hr',
    title: <Line time={1} delay={0.25}>Привет!</Line>,
    children: (
      <Wrapper>
        <Column>
          <video src={hrVideo} autoPlay></video>
        </Column>
        <Column>
          <Speech delay={1.5}>
            {[
              'HR-специалист - первый человек, которого ты встретишь',
              'при знакомстве со своим новым местом работы.',
              'Коллеги из HR помогут тебе с адаптацией, а ещё подробно расскажут о твоей роли',
              'в компании и о том, как всё устроено!',
            ]}
          </Speech>
        </Column>
      </Wrapper>
    ),
  },
];
