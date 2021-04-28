<template>
  <div class="container">
    <b-row class="mt-3">
      <b-col md="12">
        <h4 class="title">
          Filmes
        </h4>
        <b-button
            size="sm"
            variant="primary"
            v-b-modal.movie-store>+ ADICIONAR</b-button>
      </b-col>
    </b-row>

    <b-row class="mt-4" v-if="movies.length > 0">
      <b-col md="4" v-for="(item, index) in movies" :key="item.id">
        <MovieCard :item="item" :index="index" />
      </b-col>
    </b-row>

    <b-row class="mt-4" v-else>
      <b-alert variant="light" show>
        Nenhum item adicionado
      </b-alert>
    </b-row>

    <MovieModal/>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import MovieCard from "@/components/movies/MovieCard";
import MovieModal from "@/components/movies/MovieModal";

export default {
  name: "Movies",
  components: {MovieModal, MovieCard},
  computed: {
    ...mapState(['movies'])
  }
}
</script>

<style scoped>
 .title {
   font-weight: bold;
   color: #42b983;
 }
</style>