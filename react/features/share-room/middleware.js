// @flow

import Share from 'react-native-share'
import { getName } from '../app';
import { MiddlewareRegistry } from '../base/redux';
import { getShareInfoText } from '../invite';

import { endShareRoom } from './actions';
import { BEGIN_SHARE_ROOM } from './actionTypes';
import logger from './logger';
import {sendEvent} from "../mobile/external-api";

/**
 * Middleware that captures room URL sharing actions and starts the sharing
 * process.
 *
 * @param {Store} store - Redux store.
 * @returns {Function}
 */
MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
    case BEGIN_SHARE_ROOM:
        _shareRoom(action.roomURL, store);
        break;
    }

    return next(action);
});

/**
 * Open the native sheet for sharing a specific conference/room URL.
 *
 * @param {string} roomURL - The URL of the conference/room to be shared.
 * @param {Store} store - Redux store.
 * @private
 * @returns {void}
 */
const ON_INVITE_PEOPLE = "INVITE_PEOPLE"

function _shareRoom(roomURL: string, store) {
    const { dispatch, getState } = store
    getShareInfoText(getState(), roomURL)
        .then(message => {
            const title = `${getName()} Conference`;
            const onFulfilled
                = (shared: boolean) => dispatch(endShareRoom(roomURL, shared));

            Share.open(
                /* content */ {
                    message,
                    title
                },
                /* options */ {
                    dialogTitle: title, // Android
                    subject: title // iOS
                })
                .then(
                    /* onFulfilled */ value => {
                        sendEvent(store, ON_INVITE_PEOPLE, {});
                        onFulfilled(value.action === Share.sharedAction);
                    },
                    /* onRejected */ reason => {
                        sendEvent(store, ON_INVITE_PEOPLE, {});
                        logger.error(
                            `Failed to share conference/room URL ${roomURL}:`,
                            reason);
                        onFulfilled(false);
                    }).catch(() => {
                sendEvent(store, ON_INVITE_PEOPLE, {});
            }).catch(() => {
                sendEvent(store, ON_INVITE_PEOPLE, {});
            });
        });
}
