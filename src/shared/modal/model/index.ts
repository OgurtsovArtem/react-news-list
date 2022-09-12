import { openModal, closeModal, getModal } from "./events";
import { $modalList, $modalIsOpen } from "./store";

export const modelModal = {
  $modalList,
  $modalIsOpen,
  openModal,
  getModal,
  closeModal,
};
