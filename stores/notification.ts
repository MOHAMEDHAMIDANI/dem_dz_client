import { defineStore } from 'pinia';
import type { Notification } from '~/types';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [] as Notification[],
        unread: 0 as number,
    }),
    actions: {
        $reset(){

        },
        async markAsRead(id: string) {
            const { $axios } = useNuxtApp()
            try {
                const response = await $axios.put(`/notification/${id}/markAsRead`, {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    }
                })
                this.getAllNotifications()
            } catch (error) {

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

        async getUnread() {
            const { $axios } = useNuxtApp()
            try {
                const response = await $axios.get('/notification/unread', {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    }
                })
                console.log(response.data)
                this.unread = response.data
            } catch (error) {
                console.error(error)
            };
        }

    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    }
});