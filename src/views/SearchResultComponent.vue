<template>
  <div>
    <base-component>
      <template #header>
        <div class="result">
          Search Results for
          <q>{{searchParam}}</q>
        </div>
      </template>

      <template #body>
        <div class="inner_images">
          <template v-if="images.length > 0">
            <div v-for="(items, index) in grid" :key="index">
              <div class="image" v-for="image in items" :key="image.id">
                <img :src="image.urls.regular" :alt="image.alt_description" />
                <div class="text">
                  <div class="name">{{image.user.name}}</div>
                  <div class="location">{{image.user.location}}</div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="n in size" :key="n">
              <place-holder></place-holder>
              <place-holder></place-holder>
              <place-holder></place-holder>
            </div>
          </template>
        </div>
      </template>
    </base-component>
  </div>
</template>

<script>
import axios from "axios";
import BaseComponent from "@/components/Base";
import PlaceholderComponent from "@/components/PlaceholderComponent";
import grid from "@/mixins/grid";
export default {
  mixins: [grid],
  components: {
    "base-component": BaseComponent,
    "place-holder": PlaceholderComponent,
  },
  data() {
    return {
      searchParam: "",
      images: [],
    };
  },
  methods: {
    getPhotos(param) {
      axios
        .get("/search/photos?page=1&query=" + param)
        .then(({ data }) => {
          this.images = data.results;
          console.log(
            data.results,
            this.chunkArray(
              this.images,
              Math.floor(this.images.length / this.size)
            )
          );
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.searchParam = this.$route.query.query;
    this.getPhotos(this.searchParam);
  },
};
</script>

<style>
</style>