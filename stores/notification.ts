import { defineStore } from 'pinia';
import type { Notification } from '~/types';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [] as Notification[]
    }),
    actions: {
        addNotification(notification: Notification) {
            this.notifications.push(notification);
        },
        markAsRead() {

        },

    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    }
});