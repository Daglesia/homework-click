<script setup lang="ts">
import { Message } from "@/types/messages";

const { filteredMessages, setSearchString } = useMessageTable();
const searchBar = ref<string>("");
const { active, show, modalProps, close } = useModal();

const handleSearchClick = () => setSearchString(searchBar.value);

const handleMessageClick = (message: Message) => show(message);
</script>
;

<template>
  <table class="messages-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Sender</th>
        <th class="search">
          <div id="search-bar">
            <input
              v-model="searchBar"
              type="text"
              placeholder="Search"
            /><font-awesome-icon
              id="search-icon"
              icon="fa-solid fa-magnifying-glass"
              @click="handleSearchClick"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="message in filteredMessages"
        :key="message.id"
        @click="() => handleMessageClick(message)"
      >
        <td class="bold">{{ message.title }}</td>
        <td colspan="2">
          <a :href="`mailto:${message.email}`">{{ message.email }}</a>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <td colspan="3"></td>
    </tfoot>
    <Teleport v-if="active" to="main">
      <MessageModal :message="modalProps" @close="close" />
    </Teleport>
  </table>
</template>

<style lang="scss" scoped>
@use "@/styles/messagesTable.scss";
</style>
