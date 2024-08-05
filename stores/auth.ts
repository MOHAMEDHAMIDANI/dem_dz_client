import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false as boolean,
        rememberMe: false as boolean,
        access_token: '' as string | undefined | null,
        refresh_token: '' as string | undefined | null
    }),
    actions: {
        $reset(){
            this.isLoggedIn = false
            this.access_token = null
            this.isLoggedIn = false; 
            this.refresh_token = null
        },
        setTokens(){
            this.access_token = useCookie('access_token').value;
            this.refresh_token = useCookie('refresh_token').value
        },
        setLoginStatus(status: boolean) {
            this.isLoggedIn = status
        },
        setRememberMe(status: boolean) {
            this.rememberMe = status
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    }
});