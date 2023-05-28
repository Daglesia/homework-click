import { Message } from "@/types/messages";

const NUMBER_OF_MESSAGES = 1000;

export function useMessageTable() {
  const allMessages = ref<Message[]>(createMessages(NUMBER_OF_MESSAGES));

  const currentSearchString = ref<string>("");
  const filteredMessages = computed(() =>
    allMessages.value.filter(
      (message) =>
        message.email.includes(currentSearchString.value) ||
        message.title.includes(currentSearchString.value)
    )
  );

  const setSearchString = (newSearchString: string): void => {
    currentSearchString.value = newSearchString;
  };

  return { filteredMessages, setSearchString };
}
