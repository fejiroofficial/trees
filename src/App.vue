<template>
  <div id="app">
    <div class="burger-menu" type="primary" @click="showDrawer">
      <div class="burger-menu__line"></div>
      <div class="burger-menu__line burger-menu__line_mid"></div>
      <div class="burger-menu__line"></div>
    </div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <div>
        <router-link to="/">Trees</router-link>
      </div>
      <a-divider type="vertical" />
      <div>
        <router-link to="/gifs">Gifs</router-link>
      </div>
    </a-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
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
.burger-menu {
  cursor: pointer;
  width: fit-content;
  position: absolute;
  top: 2%;
  left: 2%;
  &__line {
    width: 30px;
    height: 1px;
    background-color: black;
    margin: 6px 0;
    &_mid {
      width: 23px;
    }
  }
}
.ant-card-body {
  padding: 0;
}
.ant-drawer-body {
  font-size: 19px;
  text-align: center;
}
.ant-divider,
.ant-divider-vertical {
  height: 4.9em;
}
</style>
