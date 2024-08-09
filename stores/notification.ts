import { defineStore } from 'pinia';
import type { Notification } from '~/types';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [] as Notification[],
        unread: 0 as number,
    }),
    getters : {
        getNumOfUnRead() {
            this.unread = this.notifications.filter((n) => !n.isRead).length 
        }
    },
    actions: {
        $reset() {

        },
        async markAsRead(id: string) {
            const { $axios } = useNuxtApp();
            const authStore = useAuthStore();
            const accessToken = authStore.access_token;

            if (!accessToken) {
                console.error("Access token is missing");
                return;
            }

            try {
                const response = await $axios.patch(`/notification/${id}/markRead`, {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                await this.getAllNotifications();
            } catch (error) {
                console.error(error);
            }
        },
        async getAllNotifications() {
            const { $axios } = useNuxtApp()
            try {
                const response = await $axios.get('/notification/user', {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    }
                })
                console.log(response.data)
                this.notifications = response.data
            } catch (error) {
                console.error(error)
            };
        },

    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    }
});