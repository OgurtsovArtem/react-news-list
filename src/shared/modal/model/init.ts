import { sample } from "effector";
import { closeModal, openModal } from "./events";
import { $modalList, $modalIsOpen } from "./store";

$modalList.on(openModal, (modals, id) => [...modals, { id: id }]);
$modalList.on(closeModal, (modals, id) => modals.filter((modal: { id: void }) => modal.id !== id));

/**
 * @remark при срабатывании clock прочитать значение из source и передать в target
 */

sample({
  source: $modalList,
  clock: [openModal],
  target: $modalIsOpen,
  fn: (value, target) => value.find((value: { id: void }) => value.id === target),
});

sample({
  source: $modalList,
  clock: [closeModal],
  target: $modalIsOpen,
  fn: (value, target) => value.filter((value: { id: void }) => value.id !== target),
});
