<template>
    <div class="w-16 relative group h-[80%] border-l-2 border-dashed border-textGrey flex justify-center items-center">

        <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer" src="../assets/images/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            alt="User dropdown">
        <div id="userDropdown"
            class="z-10 hidden  border-white group-hover:flex flex-col absolute top-12 right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div class="font-bold capitalize">{{ userStore.user.username }}</div>
                <div class="font-semibold truncate capitalize text-blue-800"> Role : {{ userStore.user.role }}</div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <nuxt-link to="users/settings"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings</nuxt-link>
                </li>
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
            </ul>
            <div class="py-1" @click="logOut">
                <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                    out</a>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const userStore = useUserStore();
const router = useRouter()
const logOut = async() => {
    try {
        userStore.logOutUser();
        userStore.$reset()
        router.push("/")
    } catch (error) {
        console.log(error)
        userStore.displayErrorMessage(3 , error.message)
    }
}
</script>

<style lang="scss" scoped></style>