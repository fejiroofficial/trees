<template>
  <div
    class="tree-card ant-card ant-card-bordered"
    :class="[showImage ? 'tree-card__tall' : 'tree-card__short']"
  >
    <div class="tree-card__name">{{ tree.name }}</div>
    <p>{{ tree.species_name }}</p>
    <div class="tree-card__flex-box">
      <img
        class="tree-card__img"
        v-show="showImage"
        :alt="tree.name"
        :src="tree.image"
      />
    </div>
    <div class="tree-card__flex-box">
      <button class="ant-btn tree-card__button" @click="showImage = !showImage">
        {{ showImage ? "Hide Image" : "Show Image" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tree: Object,
  },
  data() {
    return {
      showImage: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tree-card {
  width: 300px;
  display: grid;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: 50px;
  padding: 20px;
  &__img {
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
  }
  &__tall {
    height: auto;
  }
  &__short {
    height: 160px;
  }

  &__name {
    font-weight: bold;
    font-size: x-large;
  }
  &__flex-box {
    display: flex;
    justify-content: center;
  }
  &__button {
    margin-top: 10px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      border-color: darkolivegreen;
      color: darkolivegreen;
    }
  }
}
.ant-card {
  margin: 20px;
}
</style>
