import { defineNuxtRouteMiddleware } from 'nuxt/app'
import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) return
    console.log('auth middleware fired')

    const userStore = useAuthStore()

    if (!userStore.isLoggedIn && to.path !== '/') {
        return navigateTo('/')
    }

    if (userStore.isLoggedIn && to.path === '/') {
        return navigateTo('/patients')
    }
})
