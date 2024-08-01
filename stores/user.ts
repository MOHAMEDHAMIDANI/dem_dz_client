import { defineStore } from 'pinia'
import type { User } from '~/types';
import { useNuxtApp } from '#app';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            wait: false as boolean,
            errorType: 1 as number,
            message: '' as string,
            isLoggedIn: false as boolean,
            rememberMe: false as boolean,
            user: {} as User,
        }
    },
    actions: {
        $reset() {
            this.wait = false;
            this.errorType = 0;
            this.message = '';
            this.isLoggedIn = false;
            this.rememberMe = false;
            this.user = {} as User;
        },
        async loginUser(username: string, password: string, rememberMe: boolean) {
            const { $axios } = useNuxtApp();
            this.wait = true;
            try {
                const response = await $axios.post('/auth/login', { username, password });
                this.user = response.data;
                this.isLoggedIn = true;
                this.rememberMe = rememberMe || false;
            } catch (error) {
                console.log(error);
                this.displayErrorMessage(2, 'Login failed');
            } finally {
                this.wait = false;
            }
        },
        async logOutUser() {
            const { $axios } = useNuxtApp();
            try {
                await $axios.post('/auth/logout');
                this.$reset();
            } catch (error) {
                this.displayErrorMessage(2, 'Logout failed');
            }
        },
        displayErrorMessage(type: number, message: string) {
            this.errorType = type;
            this.message = message;
            setTimeout(() => {
                this.wait = false;
            }, 5000);
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
});
