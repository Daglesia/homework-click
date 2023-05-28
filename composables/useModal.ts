export function useModal() {
  const active = ref<boolean>(false);
  const modalProps = ref<any>();

  const show = <Type>(props: Type): void => {
    active.value = true;
    modalProps.value = props;
  };

  const close = (): void => {
    active.value = false;
    modalProps.value = null;
  };

  return { active, show, modalProps, close };
}
