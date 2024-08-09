<template>
  <MainLay>
    <div class="p-5 dark:bg-gray-900 antialiased h-full">
      <form
        @submit.prevent="createRoom()"
        class="h-20 w-full flex justify-between items-center"
      >
        <div class="flex w-[70%] justify-between items-center">
          <div class="flex w-full max-w-[250px] justify-between items-center">
            <label
              for="small-input"
              class="block capitalize w-lg text-sm font-medium text-gray-900 dark:text-white"
              >room name
            </label>
            <input v-model="roomName"
              type="text"
              id="small-input"
              class="block max-w-[150px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="flex w-full max-w-[250px] justify-between items-center">
            <label
              for="small-input"
              class="block capitalize text-sm font-medium text-gray-900 dark:text-white"
              >beds number</label
            >
            <input v-model="BedsNum"
              type="text"
              id="small-input"
              class="block w-full max-w-[150px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="w-full max-w-[250px] flex justify-between items-center">
            <label
              for="rooms"
              class="block pl-5 capitalize text-sm font-medium text-gray-900 dark:text-white"
            >
              section
            </label>
            <select
              v-model="sectionId"
              required
              id="rooms"
              class="bg-gray-50 border w-full max-w-[150px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected v-show="false">choose a section</option>
              <option
                v-for="section in sections"
                :key="section.id"
                :value="section.id"
              >
                {{ section.name }}
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          class="focus:outline-none outline-none text-white duration-300 focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-2 flex items-center capitalize bg-blue-700 hover:bg-blue-800"
        >
          submit
        </button>
      </form>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div
          class="h-20 shadow-sm dark:bg-gray-900 flex justify-between items-center"
        >
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-1 ml-2">
            <div
              class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block pt-2 h-10 ps-10 pb-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">room name</th>
              <th scope="col" class="px-6 py-3">available beds</th>
              <th scope="col" class="px-6 py-3">section</th>
              <th scope="col" class="px-6 py-3">bed num</th>
            </tr>
          </thead>
          <tbody v-for="(room, index) in rooms" :key="index">
            <tr
              class="text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <NuxtLink
                  :to="{
                    name: 'rooms-singleRoom-id',
                    params: { id: room.id },
                  }"
                  >{{ room.name }}</NuxtLink
                >
              </th>
              <td class="px-6 py-4">
                {{ room.beds.filter((bed) => bed.patient === null).length }}
              </td>
              <td class="px-6 py-4">
                {{ room.section.name }}
              </td>
              <td class="px-6 py-4">
                {{ room.beds.length }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </MainLay>
</template>

<script setup lang="ts">
import MainLay from "~/layouts/mainLay.vue";
import type { Room, Section } from "~/types";

const userStore = useUserStore();
const notificationStore = useNotificationStore();
const rooms = ref<Room[]>([]);
const sections = ref<Section[]>([]);
const sectionId = ref();
const roomName = ref();
const BedsNum = ref();

const createRoom = async () => {
  if (!sectionId.value || !roomName.value || !BedsNum.value) return;
  const room = await userStore.createRoom(
    sectionId.value,
    roomName.value,
    BedsNum.value
  );
  console.log(room);
  if (room) refreshNuxtData()
};
onBeforeMount(async () => {
  console.log(userStore);
  rooms.value = (await userStore.getRooms()) || [];
  sections.value = (await userStore.getSections()) || [];
  await notificationStore.getAllNotifications();
});
</script>

<style scoped></style>