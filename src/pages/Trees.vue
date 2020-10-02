<template>
  <div type="flex" justify="center">
    <h1>Trees</h1>
    <div style="display:flex; justify-content:center">
      <div
        v-if="trees"
        style="width:50%; display:flex; justify-content:space-around; flex-wrap:wrap"
      >
        <tree-card
          :tree="tree"
          v-for="tree in trees"
          :key="tree.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TreeCard from "@/components/TreeCard";
export default {
  components: {
    TreeCard,
  },
  created() {
    this.$store.dispatch("fetchTrees");
  },
  computed: {
    trees() {
      return this.$store.getters["getTrees"];
    },
  },
};
</script>
