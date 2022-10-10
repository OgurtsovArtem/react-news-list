import { forward } from 'effector';

import {
    removeError,
    resetData,
    sendLoginForm,
    sendRegistrForm,
} from './events';
import { fetchLoginFormFx, fetchRegisterFormFx } from './fx';
import {
    $authFormData,
    $authFormFailMessage,
    $authFormFailed,
    $authFormLoading,
} from './store';

$authFormData
    .on(fetchLoginFormFx.doneData, (_, res) => res)
    .on(fetchRegisterFormFx.doneData, (_, res) => res.data)
    .reset(resetData);
$authFormLoading
    .on(fetchLoginFormFx.pending, (_, isPending) => isPending)
    .on(fetchRegisterFormFx.pending, (_, isPending) => isPending);
$authFormFailed
    .on(fetchLoginFormFx.fail, () => true)
    .on(fetchRegisterFormFx.fail, () => true)
    .reset(removeError);
$authFormFailMessage
    .on(fetchLoginFormFx.failData, (_, res) => res.message)
    .on(fetchRegisterFormFx.failData, (_, res) => res.message)
    .reset(removeError);

fetchLoginFormFx.watch((params) => {
    console.log('эффект вызван с аргументом', params);
});

forward({
    from: sendRegistrForm,
    to: fetchRegisterFormFx,
});
forward({
    from: sendLoginForm,
    to: fetchLoginFormFx,
});
