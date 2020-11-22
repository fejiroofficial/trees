<template>
  <div class="gifs">
    <div class="gifs__head">
      <a-input
        class="gifs__input"
        v-model="searchInput"
        @keyup.enter="getGifsHandler('viaInput')"
        placeholder="Search for gifs"
      ></a-input>
      <a-button class="gifs__button" @click="getGifsHandler('viaInput')">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  created() {
    this.routeSearchHandler();
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
    routeSearchHandler() {
      if (this.$route.query.search) {
        this.searchInput = this.$route.query.search;
        this.getGifsHandler("viaRouter");
      }
    },
    getGifsHandler(method) {
      if (method === "viaInput") {
        history.pushState(
          {},
          null,
          `${this.$route.path}?search=${this.searchInput}`
        );
      }
      this.getGifs();
    },
    getGifs() {
      if (this.searchInput) {
        this.$store.dispatch("gifs/fetchGifs", this.searchInput);
      }
    },
    openNotificationWithIcon(type, error) {
      this.$notification[type]({
        message: "Error",
        description: error,
      });
    },
  },
  watch: {
    $route() {
      this.routeSearchHandler();
    },
    isError(val) {
      if (val) {
        this.openNotificationWithIcon("error", val);
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
    height: 120px;
    margin: 0 2%;
    padding-top: 40px;
    border-bottom: 1px solid lightgray;
  }
  &__input {
    width: 225px;
    height: 40px;
    margin-right: 10px;
  }
  &__img {
    height: 300px;
    width: 300px;
    margin-bottom: 30px;
    object-fit: cover;
    flex-grow: 1;
  }
  &__display {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 2%;
  }
  &__button {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
