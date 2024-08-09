<template>
    <MainLay>
        <div class="p-5 dark:bg-gray-900 antialiased h-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="pb-4 shadow-sm dark:bg-gray-900 flex justify-between items-center">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div
                            class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                            class="block pt-2 h-10 ps-10 pb-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items">
                    </div>
                    <nuxt-link to="patients/createPatient">
                        <button type="button"
                            class="focus:outline-none outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-2 flex items-center capitalize">
                            <Icon name="ic:round-plus" size="20" />
                            add patients
                        </button>
                    </nuxt-link>
                </div>
                <table class=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                patient name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                gender
                            </th>
                            <th scope="col" class="px-6 py-3">
                                section
                            </th>
                            <th scope="col" class="px-6 py-3">
                                room
                            </th>
                            <th scope="col" class="px-6 py-3">
                                bed num
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Archive
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(patient, index) in patients" :key="index">
                        <tr v-if="patient.approvalStatus === 'approved'" class="text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <NuxtLink :to="{ name: 'patients-patientsDetails-id', params: { id: patient.id } }">{{
                                    patient.name + ' ' + patient.familyName }}</NuxtLink>
                            </th>
                            <td class="px-6 py-4">
                                {{ patient.gender }}
                            </td>
                            <td class="px-6 py-4">
                                {{ patient.bed.room.section.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ patient.bed.room.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ patient.bed.index }}
                            </td>
                            <td class="px-6 py-4">
                                <nuxtLink :to="{ name: 'patients-patientsDetails-id', params: { id: patient.id } }" href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</nuxtLink>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">delete</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#"
                                    class="font-medium text-green-600 dark:text-green-500 hover:underline">archive</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </MainLay>
</template>

<script setup lang="ts">
import MainLay from '~/layouts/mainLay.vue';
import type { Patient } from '~/types';

const userStore = useUserStore();
const notificationStore = useNotificationStore();
const patients = ref<Patient[]>([]);

onBeforeMount(async () => {
    console.log(userStore);
    patients.value = await userStore.getPatients() || [];
    notificationStore.getAllNotifications()
});
onMounted(() => {
    console.log(userStore);
    console.log(userStore.user)
});
</script>

<style scoped></style>