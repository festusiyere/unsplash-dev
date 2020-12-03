<template>
  <div>
    <base-component>
      <template #header>
        <div class="result">
          {{status}} for
          <q>{{searchParam}}</q>
        </div>
      </template>

      <template #body>
        <div class="inner_images">
          <template v-if="images.length > 0">
            <div v-for="(items, index) in grid" :key="index">
              <div class="image" v-for="image in items" :key="image.id" @click="setImage(image)">
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
    <transition mode="out-in" name="fade">
      <modal @closeModal="toggleModal" :image="image" v-if="isOpen" />
    </transition>
  </div>
</template>

<script>
// Axios
import axios from "axios";
// Components
import BaseComponent from "@/views/BaseComponent";
import ModalComponent from "@/components/ModalComponent";
import PlaceholderComponent from "@/components/PlaceholderComponent";
// Mixins
import grid from "@/mixins/grid";
import modal from "@/mixins/modal";

export default {
  mixins: [grid, modal],
  components: {
    "base-component": BaseComponent,
    "place-holder": PlaceholderComponent,
    modal: ModalComponent,
  },
  data() {
    return {
      searchParam: "",
      status: "Searching",
      images: [],
    };
  },
  methods: {
    getPhotos(param) {
      axios
        .get("/search/photos?page=1&query=" + param)
        .then(({ data }) => {
          this.images = data.results;
          this.status = "Search Results";
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