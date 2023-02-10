/**
 * Возвращает массив препятствий, через которые игрок не может пройти.
 */
export const getObstacles = (wallsMap: HTMLObjectElement, markers: HTMLCollection) => [
  ...markers,
  ...(wallsMap.contentDocument?.querySelector('svg')?.querySelectorAll('rect') ?? []),
].filter(({ nodeName }) => ['rect', 'IMG'].includes(nodeName));
