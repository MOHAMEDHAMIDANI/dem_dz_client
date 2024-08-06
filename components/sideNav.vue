<template>
  <nav class="w-[270px] min-h-screen bg-white dark:bg-gray-800 shadow">
    <div class="w-full h-14 mb-5 flex justify-around items-center my-1">
      <div class="w-14 h-14">
        <img
          class="object-contain"
          src="../assets/images/pngegg (4).png"
          alt=""
        />
      </div>
      <h3
        class="text-2xl capitalize text-start dark:text-white text-blue-500 font-bold"
      >
        Mr.healthy
      </h3>
    </div>
    <div class="h-full min-h-screen overflow-scroll">
      <ul class="w-full flex flex-col items-center space-y-2">
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="material-symbols-light:person"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 capitalize text-lg text-textGrey duration-300"
                >
                  Users
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="item in data"
              :key="item.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ item.name }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="material-symbols:inventory"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 capitalize text-lg text-textGrey duration-300"
                >
                  inventory
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="item in data"
              :key="item.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ item.name }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="patients/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="healthicons:inpatient"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 capitalize text-lg text-textGrey duration-300"
                >
                  Patients
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="patient in patients"
              :key="patient.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ patient.name + " " + patient.familyName }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="cbi:roomslounge"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 PY-2\ capitalize text-md text-textGrey duration-300"
                >
                  Rooms & Beds
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 ml-1 group-hover:text-black bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="room in rooms"
              :key="room.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ room.name }}
                    </h3>
                    
                  </div>
                  
                </div>
              </nuxt-link>
              <ul
            class="w-full mb-1 ml-2 dark:bg-gray-900 hidden group-hover/item:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="room in rooms"
              :key="room.id"
              class="m-1 duration-300 group/items w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1 group-hover/items:purple-800">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/items:text-white duration-300"
                    />
                    <h3
                      class="group-hover/items:text-white  ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ room.name }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
            </li>
          </ul>
        </li>
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="uis:window-section"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 capitalize text-lg text-textGrey duration-300"
                >
                  sections
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="section in sections"
              :key="section.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ section.name }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="group w-[95%] hover:bg-mainBlue h-auto duration-300 rounded-sm"
        >
          <nuxt-link to="/" class="w-full">
            <div class="w-full h-10 flex justify-around items-center">
              <div class="w-[70%] h-full flex justify-start items-center">
                <Icon
                  name="uis:window-section"
                  size="30"
                  class="text-textGrey group-hover:text-white duration-300"
                />
                <h3
                  class="group-hover:text-white ml-2 capitalize text-lg text-textGrey duration-300"
                >
                  archived
                </h3>
              </div>
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                size="35"
                class="hover:rotate-180 group-hover:text-white group-hover:rotate-180 duration-300 text-textGrey"
              />
            </div>
          </nuxt-link>
          <ul
            class="w-full mb-1 bg-white dark:bg-gray-900 hidden group-hover:flex flex-col items-center duration-300 ease-in-out"
          >
            <li
              v-for="section in sections"
              :key="section.id"
              class="m-1 duration-300 group/item w-[95%] hover:bg-mainBlue h-auto rounded-sm"
            >
              <nuxt-link to="/" class="w-full">
                <div class="w-full h-10 flex items-center px-1">
                  <div class="w-full h-full flex justify-between items-center">
                    <Icon
                      name="healthicons:inpatient"
                      size="30"
                      class="text-textGrey group-hover/item:text-white duration-300"
                    />
                    <h3
                      class="group-hover/item:text-white ml-2 capitalize text-sm w-full text-textGrey duration-300"
                    >
                      {{ section.name }}
                    </h3>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Patient, Room, Section } from "~/types";

const userStore = useUserStore();
const sections = ref<Section[]>([]);
const patients = ref<Patient[]>([]);
const rooms = ref<Room[]>([]);

onBeforeMount(async () => {
  sections.value = (await userStore.getSections()) || [];
  patients.value = (await userStore.getPatients()) || [];
  rooms.value = (await userStore.getRooms()) || [];
});
</script>

<style scoped></style>
