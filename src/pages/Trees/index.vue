<template>
  <div type="flex" justify="center">
    <h1>Trees</h1>
		<div style="display:flex; justify-content:center">
    <div style="width:50%; display:flex; justify-content:space-between; flex-wrap:wrap">
      <div v-for="tree in trees" :key="tree.name" >
				<tree-card :tree="tree"/>
      </div>
    </div>
		</div>
  </div>
</template>

<script>
import TreeCard from '@/components/TreeCard'
export default {
	components: {
		TreeCard
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
