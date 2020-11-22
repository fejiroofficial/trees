<template>
  <div id="app">
    <SideNav />
    <router-view></router-view>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
