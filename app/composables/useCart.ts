import { ref } from "vue";

const isCartDrawerOpen = ref(false);

export const useCart = () => {
  const toggleCartDrawer = () => {
    isCartDrawerOpen.value = !isCartDrawerOpen.value;
  };

  const openCartDrawer = () => {
    isCartDrawerOpen.value = true;
  };

  const closeCartDrawer = () => {
    isCartDrawerOpen.value = false;
  };

  return {
    isCartDrawerOpen,
    toggleCartDrawer,
    openCartDrawer,
    closeCartDrawer,
  };
};
