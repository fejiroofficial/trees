<template>
  <div class="not-found">
    <div>
      <Logo />
      <div class="not-found__note">
        *Page not found
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__note {
    text-align: center;
  }
}
</style>
