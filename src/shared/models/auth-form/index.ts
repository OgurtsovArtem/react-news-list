import {
    sendLoginForm,
    sendRegistrForm,
    removeError,
    resetData,
} from './events';
import {
    $authFormData,
    $authFormFailMessage,
    $authFormFailed,
    $authFormLoading,
} from './store';

export const modelAuthForm = {
    $authFormData,
    $authFormFailMessage,
    $authFormFailed,
    $authFormLoading,
    sendLoginForm,
    sendRegistrForm,
    removeError,
    resetData,
};
