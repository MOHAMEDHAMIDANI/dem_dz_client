<template>
    <MainLay class="">
        <div class="w-full min-h-[650px] flex justify-center items-center">
            <form class="md:max-w-lg flex flex-col sm:max-w-sm w-full mx-auto" @submit.prevent="createPatient()">
                <h1
                    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl capitalize text-center dark:text-white">
                    add new Patient</h1>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" v-model="name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                            name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" v-model="familyName"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                            name</label>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-5 w-full">
                    <div class="flex items-center ps-4 pe-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="bordered-radio-1"
                            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">male</label>
                    </div>
                    <div class="flex items-center ps-4 pe-4 border border-gray-200 rounded dark:border-gray-700">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="bordered-radio-2"
                            class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">female</label>
                    </div>
                </div>

                <label class="inline-flex items-center cursor-pointer my-3">
                    <input type="checkbox" value="" class="sr-only peer" @click="isSickGuard = !isSickGuard">
                    <div
                        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">sick guard ? </span>
                </label>

                <div class="grid md:grid-cols-2 md:gap-6" v-if="isSickGuard">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                            name of sick guard</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                            name of sick guard</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-1 md:gap-6" v-if="isSickGuard">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                            number (+213-123-456-7890) of the sick guard </label>
                    </div>
                </div>
                <div class="grid md:grid-cols-1 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="date" name="floating_phone" id="floating_phone" v-model="dateOfEntry"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            date of entrance </label>
                    </div>
                </div>
                <div class="max-w-lg space-y-3 my-2">
                    <textarea required
                        class="py-3 px-4 block outline-none focus:border-2 border-blue-500  dark:border-blue-500 w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-whit-700 dark:text-black dark:border-transparent dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows="3" placeholder="description"></textarea>
                </div>
                <label class="inline-flex items-center cursor-pointer my-3">
                    <input type="checkbox" value="" class="sr-only peer" @click="isRoom = !isRoom">
                    <div
                        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> assign to room ? </span>
                </label>
                <div class="max-w-lg mx-auto mb-5 " v-if="isRoom">
                    <label for="rooms" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Available
                        rooms </label>
                    <select required id="rooms" v-model="selectedRoomId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="room in rooms" :key="room.id" :value="room.id">
                            {{ room.name }}</option>
                    </select>
                </div>
                <div class="max-w-lg mx-auto mb-5 " v-if="isRoom">
                    <label for="rooms" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Available
                        rooms </label>
                    <select required id="rooms" v-model="selectedBedId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="(bed, index ) in rooms?.find(room => room.id == selectedRoomId)?.beds"
                            :key="bed.id" :value="bed.id">{{ index + 1 }} - {{ bed.patient ? 'occupied' : 'available' }}
                        </option>
                    </select>
                </div>
                <button type="submit"
                    class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    </MainLay>
</template>

<script setup lang="ts">
import MainLay from '~/layouts/mainLay.vue';
import { ref } from 'vue';
import { DatePicker } from '@nuxt/ui';
import type { Room } from '~/types';

const isSickGuard = ref(false)
const isRoom = ref(false)
const selectedDate = ref(null);

const selectedRoomId = ref()
const selectedBedId = ref()
const name = ref('')
const familyName = ref('')
const dateOfEntry = ref(new Date())


const userStore = useUserStore()
const rooms = ref<Room[]>()
onBeforeMount(async () => {
    rooms.value = await userStore.getRooms()
    console.log(rooms)
})
const createPatient = async () => {
    try {
        const patient = await userStore.createPAtient({
            name: name.value,
            familyName: familyName.value,
            dateOfEntry: dateOfEntry.value,
            dateOfBirth: dateOfEntry.value,
        }, selectedRoomId.value, selectedBedId.value)
        console.log(patient)
        if (patient) navigateTo('/patients')
    } catch (error) {
        console.error(error)
    }
}
</script>

<style scoped>
::-webkit-datetime-edit {
    color: rgb(29 78 216);
    width: 100%;
}

::-webkit-datetime-edit-text {
    color: black;
}

.dark ::-webkit-datetime-edit-text {
    color: white;
}
</style>