<template>
  <div class="gifs">
    <div class="gifs__head">
      <a-input
        class="gifs__input"
        v-model="searchInput"
        @keyup.enter="getGifs"
        placeholder="Search for gifs"
      ></a-input>
      <a-button @click="getGifs">
        <a-spin v-if="searchInput && isLoading" />
        <span v-else>Search</span>
      </a-button>
    </div>
    <div class="gifs__display" v-if="gifs">
      <img
        class="gifs__img"
        v-for="gif in gifs"
        :key="gif.id"
        :src="gif.images.original.url"
        alt=""
      />
    </div>
    <div class="gifs__display">
      {{ isError }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    gifs() {
      return this.$store.getters["gifs/getGifs"];
    },
    isLoading() {
      return this.$store.getters["gifs/getLoading"];
    },
    isError() {
      return this.$store.getters["gifs/getError"];
    },
  },
  methods: {
    getGifs() {
      if (this.searchInput) {
        this.$store.dispatch("gifs/fetchGifs", this.searchInput);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gifs {
  &__head {
    display: flex;
    align-items: center;
    height: 80px;
    margin: 0 50px;
    border-bottom: 1px solid lightgray;
  }
  &__input {
    width: 20%;
    margin-right: 10px;
  }
  &__img {
    height: 300px;
    width: 300px;
    margin-bottom: 30px;
  }
  &__display {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 50px 50px;
  }
}
</style>
