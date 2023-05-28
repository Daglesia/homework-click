<script setup lang="ts">
import { Message } from "@/types/messages";

const props = defineProps<{
  message: Message;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div class="message-modal">
    <div class="modal-overlay" @click="() => emit('close')"></div>
    <div class="modal">
      <header>
        {{ props.message.title }}
        <font-awesome-icon
          id="search-icon"
          icon="fa-solid fa-xmark"
          @click="() => emit('close')"
        />
      </header>
      <span>
        {{ props.message.content }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/messageModal.scss";
</style>
