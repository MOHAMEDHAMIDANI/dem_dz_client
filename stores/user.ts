import { defineStore } from 'pinia'
import type { CreatePatientDto, Patient, Room, User } from '~/types';
import { useNuxtApp, type CookieRef } from '#app';
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            wait: false as boolean,
            errorType: 1 as number,
            message: '' as string,
            user: {} as User,
        }
    },
    actions: {
        $reset() {
            this.user = {} as User;
        },
        async loginUser(username: string, password: string, rememberMe : boolean) { 
            const { $axios } = useNuxtApp();
            const authUser = useAuthStore()    
            try {
                this.wait = true;
                const response = await $axios.post('/auth/login', { username, password });
                this.user = response.data;
                authUser.setTokens()
                authUser.setRememberMe(rememberMe)
                authUser.setLoginStatus(true)
            } catch (error) {
                console.log(error);
                this.displayErrorMessage(2, 'Login failed');
            }
        },
        async logOutUser() {
            const { $axios } = useNuxtApp();
            try {
                await $axios.post('/auth/logout');
                this.$reset();
                useAuthStore().$reset();
            } catch (error) {
                this.displayErrorMessage(2, 'Logout failed');
            }
        },
        displayErrorMessage(type: number, message: string) {
            this.errorType = type;
            this.message = message;
            setTimeout(() => {
                this.wait = false;
            }, 1000);
        },
        async getRooms(): Promise<Room[] | undefined> {
            const { $axios } = useNuxtApp();
            try {
                const response = await $axios.get('/room', {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    }
                });
                return response.data;
            } catch (error) {
                console.error(error);
                return [];
            }
        } , 
        async createPatient (createPAtientDto : CreatePatientDto , roomId : string , bedId : string) {
            const { $axios } = useNuxtApp();
            try {
                const response = await $axios.post(`/patients/${roomId}`, createPAtientDto ,  {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    },
                });
                console.log(response.data)
                return response.data;
            } catch (error) {
                console.error(error);
                return [];
            }
        },
        async getPatients() : Promise<Patient[] | undefined> {
            const { $axios } = useNuxtApp();
            try {
                const response = await $axios.get('/patients', {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    }
                });
                return response.data;
            } catch (error) {
                console.error(error);
                return [];
            }
        },
        async acceptPatient (patientId : string) {
            const { $axios } = useNuxtApp();
            try {
                const response = await $axios.post(`/patients/${patientId}/approve`, {} ,  {
                    headers: {
                        'Authorization': `Bearer ${useAuthStore().access_token}`
                    },
                });
                console.log(response.data)
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
});
