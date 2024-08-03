import { defineStore } from 'pinia'
import type { CreatePatientDto, Patient, Room, User } from '~/types';
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
            access_token : useCookie('access_token'),
            refresh_token : useCookie('refresh_token')
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
            }, 10000);
        },
        async getRooms(): Promise<Room[] | undefined> {
            const { $axios } = useNuxtApp();
            try {
                const response = await $axios.get('/room', {
                    headers: {
                        'Authorization': `Bearer ${this.access_token}`
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
                        'Authorization': `Bearer ${this.access_token}`
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
                        'Authorization': `Bearer ${this.access_token}`
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
                        'Authorization': `Bearer ${this.access_token}`
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
