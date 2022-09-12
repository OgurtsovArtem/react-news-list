import { useStore } from "effector-react";
import { Done } from "features/done";
import React from "react";
import { FC, useEffect } from "react";
import { modelModal } from "shared/modal";
import { AuthPopupForm } from "widgets/auth-popup-form";
import { AUTH_MODAL_ID, DONE_MODAL_ID } from "../lib/names";

interface PopupsProps {}

const Popups: FC<PopupsProps> = React.memo(() => {
  const currentModal = useStore(modelModal.$modalIsOpen);
  const list = useStore(modelModal.$modalList);
  console.log(currentModal);
  return (
    <>
      {currentModal?.id === AUTH_MODAL_ID && <AuthPopupForm type={"login"} id={AUTH_MODAL_ID} />}
      {currentModal?.id === DONE_MODAL_ID && <Done id={DONE_MODAL_ID} />}
    </>
  );
});

export default Popups;
