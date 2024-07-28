<template>
    <MainLay>
        <h3 class="dark:text-gray-200 h-10 text-2xl ml-2 mt-2 capitalize">user > settings </h3>
        <div class="flex justify-around flex-wrap items-center">
            <div class="max-w-3xl w-full h-[600px] rounded-lg flex flex-col justify-evenly items-center">
                <div
                    class="w-full h-[30%] dark:bg-gray-700 bg-white shadow-lg flex justify-between items-center rounded-lg mt-3">
                    <img class="w-28 border h-28 m-auto rounded"
                        src="/assets/images/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="Large avatar">
                    <div class="w-[80%] h-full p-4  flex justify-between">
                        <div class=" p-2 w-full">
                            <h1
                                class="mb-2 font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl capitalize dark:text-gray-100">
                                {{ firstName + " " + lastName }}</h1>
                            <h1
                                class="mb-2 font-normal leading-none tracking-tight text-gray-900 text-lg  dark:text-gray-200">
                                {{ email }}</h1>
                            <p class="text-lg font-normal text-gray-500 lg:text-xl mb-2 dark:text-gray-400"> {{ phone }}
                            </p>
                            <button type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Icon name="ic:round-cloud-upload" size="20" class="mr-2" />
                                upload image
                            </button>
                        </div>

                        <div class="flex items-center justify-center max-w-xs w-full">
                            <label for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[65%] rounded-lg bg-white shadow-lg dark:bg-gray-700 overflow-hidden">
                    <div class="w-full px-5 h-10 dark:text-white flex justify-between items-center">
                        <h3 class="capitalize text-lg font-medium">details</h3>
                        <Icon name="material-symbols-light:person-edit-outline-sharp" size="35"
                            class="text-blue-500 cursor-pointer" @click="validated = !validated" />
                    </div>
                    <form class="p-5">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                    name</label>
                                <input type="text" id="first_name" :disabled=validated
                                    :class="validated ? 'cursor-not-allowed' : 'cursor-text'" v-model="firstName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required />
                            </div>
                            <div>
                                <label for="last_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                    name</label>
                                <input type="text" id="last_name" :disabled=validated
                                    :class="validated ? 'cursor-not-allowed' : 'cursor-text'" v-model="lastName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe" required />
                            </div>
                            <div>
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                    number</label>
                                <input type="tel" id="phone" :disabled=validated
                                    :class="validated ? 'cursor-not-allowed' : 'cursor-text'" v-model="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="123-45-678" pattern="^(00213|\+213|0)(5|6|7)[0-9]{8}$" required />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                address</label>
                            <input type="email" id="email" :disabled=validated
                                :class="validated ? 'cursor-not-allowed' : 'cursor-text'" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com" required />
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <transition>
                <div v-if="!validated" class=" flex justify-center items-center max-w-md w-full md:inset-0">
                    <div class="p-4 w-full max-w-md max-h-full">
                        <div class="bg-white rounded-lg shadow dark:bg-gray-700">
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="capitalize text-xl font-semibold text-gray-900 dark:text-white">
                                    change your password
                                </h3>
                            </div>
                            <div class="p-4 md:p-5">
                                <form class=" flex flex-col gap-2" action="#">
                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Your
                                            email</label>
                                        <input type="email" name="email" id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label for="password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">new
                                            password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <div>
                                        <label for="password"
                                            class="block capitalize mb-2 text-sm font-medium text-gray-900 dark:text-white">rewrite
                                            the
                                            new
                                            password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required />
                                    </div>
                                    <button type="submit"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">
                                        change password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from '~/layouts/mainLay.vue';
const validated = ref(true)
const email = ref('mohamede@gmail.com')
const firstName = ref('mohamed')
const lastName = ref('hamidani')
const phone = ref('123456789')

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>