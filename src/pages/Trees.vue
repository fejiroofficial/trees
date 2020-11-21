<template>
  <div class="trees-container">
    <Logo />
    <p>"On the last day of the world I would want to plant a tree."</p>
    <p>― W.S. Merwin</p>
    <div class="trees-container__display">
      <div class="trees-container__display-inner" v-if="trees">
        <tree-card :tree="tree" v-for="tree in trees" :key="tree.name" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import TreeCard from "@/components/TreeCard";

export default {
  components: {
    Logo,
    TreeCard,
  },
  created() {
    this.$store.dispatch("trees/fetchTrees");
  },
  computed: {
    trees() {
      return this.$store.getters["trees/getTrees"];
    },
  },
};
</script>

<style lang="scss" scoped>
.trees-container {
  text-align: center;
  &__display {
    display: grid;
    justify-content: center;
  }
  &__display-inner {
    width: 43rem;
    display: flex;
    flex-flow: wrap;

    @media (max-width: 675px) {
      width: 20rem;
    }
  }
}
</style>
