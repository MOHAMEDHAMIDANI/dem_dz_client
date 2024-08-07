<template>
  <div class="w-full h-full">
    <div>
      <ol
        class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
      >
        <li
          class="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
          :class="steps === 1 ? 'text-blue-600 dark:text-blue-500' : ''"
        >
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
          >
            <svg
              v-if="steps === 1"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            Examination <span class="hidden sm:inline-flex sm:ms-2">Type</span>
          </span>
        </li>
        <li
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
          :class="steps === 2 ? 'text-blue-600 dark:text-blue-500' : ''"
        >
          <span
            class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
          >
            <svg
              v-if="steps === 2"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="me-2">2</span>
            Examination
            <span class="hidden sm:inline-flex sm:ms-2">Selection</span>
          </span>
        </li>
        <li
          class="flex items-center"
          :class="steps === 3 ? 'text-blue-600 dark:text-blue-500' : ''"
        >
          <svg
            v-if="steps === 3"
            class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span class="me-2">3</span>
          Confirmation
        </li>
      </ol>
    </div>
    <div class="w-full h-full pt-2 flex justify-evenly flex-wrap items-center">
      <ul class="grid w-full gap-6 md:grid-cols-3" v-if="steps === 1">
        <li
          v-for="(exam, index) in exams"
          :key="index"
          class="max-h-[350px] h-full"
        >
          <input
            type="checkbox"
            :id="`exam-${index}`"
            :checked="selectedExam === index"
            class="hidden peer"
            @change="selectExam(index)"
          />
          <label
            :for="`exam-${index}`"
            class="inline-flex items-center justify-between w-full p-5 h-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <Icon :name="exam.icon" size="35" />
              <div class="w-full text-lg font-semibold">{{ exam.title }}</div>
              <div class="w-full text-sm text-balance">
                {{ exam.description }}
              </div>
            </div>
          </label>
        </li>
      </ul>
      <div v-if="steps === 2" class="w-full text-center">
        <!-- Add your examination selection content here -->
        <p>Select the specific examinations required.</p>
      </div>
      <div v-if="steps === 3" class="w-full text-center">
        <!-- Add your confirmation content here -->
        <p>Confirm your selections.</p>
      </div>
    </div>
    <button
      v-if="steps < 3"
      @click="nextStep"
      :disabled="steps === 1 && selectedExam === null"
      class="bg-purple-600 p-0.5 flex justify-center items-center rounded-md text-white hover:bg-purple-800 duration-300 right-3 bottom-3 absolute disabled:bg-gray-400"
    >
      <Icon
        name="material-symbols:chevron-right-rounded"
        size="40"
        color="currentColor"
      />
    </button>
    <button
      v-if="steps > 1"
      @click="prevStep"
      class="bg-purple-600 p-0.5 flex justify-center items-center rounded-md text-white hover:bg-purple-800 duration-300 left-3 bottom-3 absolute"
    >
      <Icon
        name="material-symbols:chevron-left-rounded"
        size="40"
        color="currentColor"
      />
    </button>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";

enum RequestType {
  Radiology = "radiology",
  Lab = "lab",
  Action = "action",
}

const steps = ref<number>(1);
const selectedExam = ref<number | null>(null);

const exams = [
  {
    title: RequestType.Radiology,
    description: "Request a radiology from the x-ray lab",
    icon: "healthicons:radiology",
  },
  {
    title: RequestType.Lab,
    description: "Request an examination from the laboratory ",
    icon: "mingcute:nurse-fill",
  },
  {
    title: RequestType.Action,
    description: "Request an action from a nurse",
    icon: "medical-icon:laboratory",
  },
];

const selectExam = (index: number) => {
  selectedExam.value = index;
};

const nextStep = () => {
  if (steps.value < 3 && (steps.value !== 1 || selectedExam.value !== null))
    steps.value++;
};

const prevStep = () => {
  if (steps.value > 1) steps.value--;
};
</script>
  
  <style scoped>
</style>
  