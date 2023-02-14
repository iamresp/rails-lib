import React from 'react';
import hrVideo from '@/assets/video/hr.mp4';
import hr2Video from '@/assets/video/hr2.mp4';
import hr3Video from '@/assets/video/hr3.mp4';
import hr4Video from '@/assets/video/hr4.mp4';
import { Line, Speech } from '@/components';
import { Column, Wrapper } from '@/styled/dialogs';

export const LOCKED_MODALS = new Set<string>();

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
              'HR-специалист — первый человек, которого ты встретишь',
              'при знакомстве со своим новым местом работы.',
              'Коллеги из HR помогут тебе с адаптацией, а ещё подробно расскажут о твоей роли',
              'в компании и о том, как всё устроено!',
            ]}
          </Speech>
        </Column>
      </Wrapper>
    ),
  },
  {
    id: 'hr2',
    title: <Line time={1} delay={0.25}>Привет!</Line>,
    children: (
      <Wrapper>
        <Column>
          <video src={hr2Video} autoPlay></video>
        </Column>
        <Column>
          <Speech delay={1.5}>
            {[
              'Офис-менеджер - это второй человек,',
              'которого ты встретишь в ходе своего трудоустройства:',
              'он обеспечивает офис всем необходимым,',
              'помогает коллегам с входящей и исходящей корреспонденцией,',
              'и готовит пропуска для всех сотрудников.',
              'Именно он и вручит тебе твой пропуск в компанию.',
            ]}
          </Speech>
        </Column>
      </Wrapper>
    ),
  },
  {
    id: 'hr3',
    title: <Line time={1} delay={0.25}>Привет!</Line>,
    children: (
      <Wrapper>
        <Column>
          <video src={hr3Video} autoPlay></video>
        </Column>
        <Column>
          <Speech delay={1.5}>
            {[
              'Коллеги из команды тех.поддержки предоставляют оборудование сотрудникам,',
              'занимаются созданием корпоративной учетной записи,',
              'а также предоставляют доступы к необходимым корпоративным сервисам.',
            ]}
          </Speech>
        </Column>
      </Wrapper>
    ),
  },
  {
    id: 'hr4',
    title: <Line time={1} delay={0.25}>Привет!</Line>,
    children: (
      <Wrapper>
        <Column>
          <video src={hr4Video} autoPlay></video>
        </Column>
        <Column>
          <Speech delay={1.5}>
            {[
              'PMO специалист - это помошник менеджера проекта.',
              'Его основная задача - администрирование и координация задач внутри команды,',
              'а также контроль сроков их выполнения',
            ]}
          </Speech>
        </Column>
      </Wrapper>
    ),
  },
];
