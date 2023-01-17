/**
 * Тип значений контекста модалок.
 */
export type TModalContextValues = {
  modalId?: string;
};

/**
 * Тип контекста модалок.
 */
export type TModalContext = TModalContextValues & {
  openModal?: (id: string | undefined) => void;
};
