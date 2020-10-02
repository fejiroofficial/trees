<template>
  <div class="tree-card ant-card ant-card-bordered">
    <div class="tree-card__name">{{ tree.name }}</div>
    <p>{{ tree.species_name }}</p>
    <img
      v-if="showImage"
      :alt="tree.name"
      :src="tree.image"
      style="width: 200px; height: 200px"
    />
    <button class="ant-btn" @click="showImage = !showImage" style="margin-top: 10px;">{{
      showImage ? "Hide Image" : "Show Image"
    }}</button>
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
  margin-bottom: 50px;
  padding: 20px;

  &__name {
    font-weight: bold;
    font-size: x-large;
  }
}
.ant-card {
  margin: 20px;
}
</style>
