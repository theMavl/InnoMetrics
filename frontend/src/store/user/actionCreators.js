import _ from 'lodash'
import {getResponseError} from '../../helpers/errorProcessors'
import {TYPES as USER_TYPES} from './actionTypes'
import {postRequest} from '../../helpers/api'
import {generatePasswordHash, redirectFromAuth} from '../../helpers/authenticationUtils'

var forge = require('node-forge');

export const loginRequest = () => (dispatch, getState) => {
    dispatch({type: USER_TYPES.LOGIN_REQUEST})

    const userData = getState().form.authorization.values
    // const pass_h = generatePasswordHash(userData.email.trim(), userData.password.trim())

    forge.pkcs5.pbkdf2(userData.password.trim(), userData.email.trim(), 10000, 64, function (err, derivedKey) {
        const pass_h = forge.util.bytesToHex(derivedKey);
        const params = {
            email: userData.email.trim(),
            password: pass_h
        }

        postRequest('/login', params)
            .then((result) => {
                dispatch({
                    type: USER_TYPES.LOGIN_SUCCESS,
                    token: result.data.token,
                    password_h: pass_h,
                    private_key_h: result.data.private_key_h
                })
                redirectFromAuth()
            })
            .catch((error) => {
                dispatch({type: USER_TYPES.LOGIN_FAILURE, error: getResponseError(error.status, '/login', 'post')})
            })
    });

}

export const registerRequest = () => (dispatch, getState) => {
    dispatch({type: USER_TYPES.REGISTER_REQUEST})

    const userData = getState().form.authorization.values
    // const pass_h = generatePasswordHash(userData.email.trim(), userData.password.trim());

    forge.util.bytesToHex(forge.pkcs5.pbkdf2(userData.password.trim(), userData.email.trim(), 10000, 64, function (err, derivedKey) {
        const pass_h = forge.util.bytesToHex(derivedKey);
        const params = {
            email: userData.email.trim(),
            password: pass_h,
            name: userData.name.trim(),
            surname: userData.surname.trim()
        }

        postRequest('/user', params)
            .then((result) => {
                dispatch({type: USER_TYPES.REGISTER_SUCCESS})
                loginRequest()(dispatch, getState)
            })
            .catch((error) => {
                dispatch({type: USER_TYPES.REGISTER_FAILURE, error: getResponseError(error.status, '/user', 'post')})
            })
    }));
}

export const logoutRequest = () => (dispatch, getState) => {
    dispatch({type: USER_TYPES.LOGOUT_REQUEST})

    postRequest('/logout', {})
        .then((result) => {
            dispatch({type: USER_TYPES.LOGOUT_SUCCESS})
        })
        .catch((error) => {
            dispatch({type: USER_TYPES.LOGOUT_FAILURE, error: getResponseError(error.status, '/logout', 'post')})
        })
}