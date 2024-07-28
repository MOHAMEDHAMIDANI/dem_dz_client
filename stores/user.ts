import { defineStore } from 'pinia'
import type { User } from '~/types';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            wait : false as boolean ,
            errorType : 1 as number ,
            message : 'fuck you im working ' as string ,
            isLoggedIn : false as boolean,
            rememberMe : false as boolean,
            user : {} as User ,
        }
    },
    actions: {
        async loginUser(username : string , password : string){
            
        },
        displayErrorMessage (type : number , message : string){
            this.errorType = type ;
            this.message = message ;
            this.wait = false ;
        }
    },
    getters: {

    },
    persist : true,
})