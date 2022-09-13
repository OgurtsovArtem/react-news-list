import { openModal, closeModal, } from "./events";
import { $modalList, $modalIsOpen } from "./store";

export const modelModal = {
  $modalList,
  $modalIsOpen,
  openModal,
  closeModal,
};
