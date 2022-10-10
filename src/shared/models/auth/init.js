import { forward } from 'effector';
import { loadUser } from './events';
import { fetchAuthFx } from './fx';
import { $isUserFailed, $isUserLoading, $user } from './store';

$user.on(fetchAuthFx.doneData, (_, res) => res.data);
$isUserLoading.on(fetchAuthFx.pending, (_, isPending) => isPending);
$isUserFailed.on(fetchAuthFx.fail, (_, error) => error);

forward({
    from: loadUser,
    to: fetchAuthFx,
});
