<template>
  <div>
    <base-component>
      <template #header>
        <div class="input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <form @submit.prevent="submitForm">
            <input type="text" v-model="search" placeholder="Search for photo" />
          </form>
        </div>
      </template>

      <template #body>
        <div class="inner_images">
          <template v-if="images.length > 0">
            <div v-for="(items, index) in grid" :key="index">
              <div class="image" v-for="image in items" @click="setImage(image)" :key="image.id">
                <img :src="image.urls.small" :alt="image.alt_description" />
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
      search: "",
      images: [],
      image: null,
    };
  },
  methods: {
    getPhotos() {
      axios
        .get("/search/photos?page=2&per_page=8&query=african")
        .then(({ data }) => {
          this.images = data.results;
        })
        .catch((error) => console.log(error));
    },
    submitForm() {
      if (this.search != "") {
        this.$router.push({ path: "/search", query: { query: this.search } });
      }
      return false;
    },
  },
  created() {
    this.getPhotos();
  },
};
</script>

<style>
</style>