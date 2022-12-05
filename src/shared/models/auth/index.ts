import { $user, $isUserFailed, $isUserLoading } from './store';
import { getUser, userLogout } from './events';

export const modelAuth = {
    $user,
    $isUserFailed,
    $isUserLoading,
    getUser,
    userLogout,
};
