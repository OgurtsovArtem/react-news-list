import { forward } from 'effector';
import { deleteCookie } from 'shared/utils/cookie';
import { getUser, userLogout } from './events';
import { fetchAuthFx } from './fx';
import { $isUserFailed, $isUserLoading, $user } from './store';

$user.on(fetchAuthFx.doneData, (_, res) => res).on(userLogout, () => null);
$isUserLoading.on(fetchAuthFx.pending, (_, isPending) => isPending);
$isUserFailed.on(fetchAuthFx.fail, () => true);

userLogout.watch(() => {
    deleteCookie('accessToken');
});

forward({
    from: getUser,
    to: fetchAuthFx,
});
