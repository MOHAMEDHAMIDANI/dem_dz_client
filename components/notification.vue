<template>
  <div>
    <div
      class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" :class="notification.isRead ? 'bg-red-200' : ''"
      role="alert"
      v-for="(notification, index) in notifications"
      :key="notification.id"
    >
      <div class="flex" >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full"
        >
          <img
            class="w-full h-full rounded-full"
            src="/assets/images/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div class="ms-3 text-sm font-normal">
          <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
            >from Dr theShy</span
          >
          <div
            class="mb-2 text-sm font-normal text-balance max-h-[100px] overflow-auto"
          >
            {{ notification.message }}
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div v-if="!notification.isRead"
                @click="markAsRead(notification.id)"
                class="inline-flex cursor-pointer col-span-2 justify-center w-full px-2 capitalize text-balance py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >mark as read</div>
                <div v-if="notification.isRead"
                @click="markAsRead(index)"
                class="inline-flex col-span-1 justify-center w-full px-2 capitalize text-balance py-1.5 text-xs font-medium text-center text-white bg-emerald-600 rounded-lg cursor-default focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >read</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { io } from "socket.io-client";

const notificationStore = useNotificationStore();
const { notifications, getAllNotifications, markAsRead, } = notificationStore;
const userId = useUserStore().user.id;
const socket = io("http://localhost:3000/", {
  query: { userId },
});

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("notification", (notification) => {
  console.log("New notification:", notification);
  const audio = new Audio("/assets/images/mixkit-happy-bells-notification-937.wav");
  audio.play();
  getAllNotifications(notification);
});

socket.on("disconnect", () => {
  console.log("Disconnected from WebSocket server");
});
</script>
