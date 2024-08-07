<template>
  <MainLay>
    <div class="w-full h-full p-4 pb-10 flex flex-wrap">
      <div class="md:flex w-full h-full">
        <ul
          class="flex-column h-full space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"
        >
          <li>
            <a
              href="#"
              @click.prevent="setActiveTab('profile')"
              :class="[
                'inline-flex items-center px-4 py-3 rounded-lg w-full',
                activeTab === 'profile'
                  ? 'text-white bg-blue-700 dark:bg-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
              ]"
              aria-current="page"
            >
              <svg
                class="w-4 h-4 me-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                />
              </svg>
              <h3>Profile</h3>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="setActiveTab('progress')"
              :class="[
                'inline-flex items-center px-4 py-3 rounded-lg w-full',
                activeTab === 'progress'
                  ? 'text-white bg-blue-700 dark:bg-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
              ]"
            >
              <Icon name="carbon:request-quote" size="20" class="mr-1" />
              <h3 class="capitalize">progress</h3>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="setActiveTab('examination')"
              :class="[
                'inline-flex items-center px-4 py-3 rounded-lg w-full',
                activeTab === 'examination'
                  ? 'text-white bg-blue-700 dark:bg-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
              ]"
            >
              <Icon
                name="healthicons:i-exam-multiple-choice-outline"
                size="20"
                class="mr-1"
              />
              <h3 class="capitalize">examination</h3>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="setActiveTab('treatment')"
              :class="[
                'inline-flex items-center px-4 py-3 rounded-lg w-full',
                activeTab === 'treatment'
                  ? 'text-white bg-blue-700 dark:bg-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
              ]"
            >
              <Icon
                name="material-symbols:health-and-safety-rounded"
                size="20"
                class="mr-1"
              />
              <h3 class="capitalize">treatment</h3>
            </a>
          </li>
        </ul>
        <div
          v-if="activeTab === 'profile'"
          class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg max-w-6xl w-full h-full"
        >
          <div class="w-full flex justify-between items-center mb-5">
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white capitalize"
            >
              Profile
            </h3>
            <Icon
              name="material-symbols:person-edit-outline-sharp"
              size="35"
              class="cursor-pointer"
            />
          </div>
          <div class="w-full h-full grid grid-cols-3">
            <div class="flex flex-col pb-3 col-start-1">
              <dt
                class="mb-1 text-gray-500 md:text-lg capitalize dark:text-white font-medium"
              >
                full name
              </dt>
              <dd class="text-lg font-semibold">
                {{ patient?.name + " " + patient?.familyName }}
              </dd>
            </div>
            <div class="flex flex-col pb-3 col-start-2">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                gender
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.gender }}</dd>
            </div>
            <div class="flex flex-col pb-3 col-start-3">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                date of birth
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.dateOfBirth }}</dd>
            </div>
            <div class="flex flex-col pb-3 col-start-1 col-end-4">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                description
              </dt>
              <dd class="text-lg font-semibold text-balance">
                {{ patient?.description }}
              </dd>
            </div>
            <div class="flex flex-col pb-3 col-start-1">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                section
              </dt>
              <dd class="text-lg font-semibold">
                {{ patient?.bed.room.section.name }}
              </dd>
            </div>
            <div class="flex flex-col pb-3 col-start-2">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                room
              </dt>
              <dd class="text-lg font-semibold">
                {{ patient?.bed.room.name }}
              </dd>
            </div>
            <div class="flex flex-col pb-3 col-start-3">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                bed
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.bed.index }}</dd>
            </div>
            <div class="flex flex-col pb-3 col-start-1">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                sick guard
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.sickGuard }}</dd>
            </div>
            <div class="flex flex-col pb-3 col-start-2">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                phone number
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.phoneNumber }}</dd>
            </div>
            <div class="flex flex-col pb-3 col-start-3">
              <dt
                class="mb-1 text-gray-500 md:text-lg dark:text-white capitalize"
              >
                date of entry
              </dt>
              <dd class="text-lg font-semibold">{{ patient?.dateOfEntry }}</dd>
            </div>
          </div>
        </div>
        <div
          v-if="activeTab === 'progress'"
          class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg max-w-6xl w-full"
        >
          <form class="mb-1">
            <div class="flex justify-between items-center mb-2">
              <label
                for="message"
                class="inline-block text-sm font-medium text-gray-900 dark:text-white capitalize"
                >New progress</label
              >
              <button
                type="submit"
                class="capitalize focus:outline-none outline-none text-white bg-blue-700 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 flex items-center"
              >
                submit
              </button>
            </div>
            <textarea
              id="message"
              rows="4"
              required
              class="block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write the new progress you saw here "
            ></textarea>
          </form>
          <div class="w-full flex justify-between items-center">
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-2 capitalize"
            >
              progress
            </h3>
          </div>
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >February 2th 2022</time
              >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p
                class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, tempore officia voluptatum, vero architecto soluta
                itaque, mollitia recusandae accusantium delectus quaerat quis
                eaque nostrum eos? Nisi, alias. Dolorum, aspernatur qui?
              </p>
            </li>
            <li class="mb-10 ms-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >March 2022</time
              >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Marketing UI design in Figma
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ms-4">
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >April 2022</time
              >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
        <div
          v-if="activeTab === 'examination'"
          class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg max-w-6xl w-full"
        >
          <div class="w-full flex justify-between items-center">
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-2 capitalize"
            >
              examination
            </h3>
            <button @click="examinationReqTap = true"
              class="bg-purple-600 flex justify-center items-center rounded-md text-white hover:bg-purple-800 duration-300"
            >
              <Icon
                name="material-symbols:add-rounded"
                size="35"
                color="currentColor"
              />
            </button>
            <div v-if="examinationReqTap"
              class="absolute w-full flex justify-center items-center h-full top-0 left-0 z-[100] bg-black dark:bg-opacity-40 bg-opacity-40 dark:bg-white"
            >
              <div class="w-[80%] h-[80%] bg-white dark:bg-gray-800 relative rounded-lg">
                <button @click="examinationReqTap = false"
                  class="bg-purple-600 flex justify-center items-center rounded-md text-white hover:bg-purple-800 duration-300 absolute top-3 right-3"
                >
                  <Icon
                    name="material-symbols:close-rounded"
                    size="35"
                    color="currentColor"
                  />
                </button>
                 <div class="w-full h-full ">
                    <div class="w-full h-full p-6 py-16">
                        <ExaminationReq />

                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="activeTab === 'treatment'"
          class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg max-w-6xl w-full"
        >
          <div class="w-full flex justify-between items-center">
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-2 capitalize"
            >
              treatment
            </h3>
          </div>
        </div>
      </div>
    </div>
  </MainLay>
</template>

<script setup lang="ts">
import MainLay from "~/layouts/mainLay.vue";
import type { Patient } from "~/types";

const activeTab = ref("");
const examinationReqTap = ref(false);

const patient = ref<Patient>();

const userStore = useUserStore();
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
onBeforeMount(async () => {
  setActiveTab("profile");
  const patientId = useRoute().params.id;
  console.log(patientId);
  patient.value = await userStore.getPatient(patientId.toString());
  console.log(patient.value);
});
</script>

<style scoped></style>
