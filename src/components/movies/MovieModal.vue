<template>
  <div>
    <b-modal
        id="movie-store"
        title="Novo Filme"
        hide-footer
    >
        <div class="p-2">
          <div class="form-group">
            <label for="movie-title">Titulo</label>
            <input
                type="text"
                id="movie-title"
                class="form-control"
                v-model="title"
                placeholder="Escreva.."
            >
          </div>

          <div class="form-group">
            <label for="movie-subtitle">Subtítulo</label>
            <input
                type="text"
                id="movie-subtitle"
                class="form-control"
                v-model="subtitle"
                placeholder="Escreva.."
            >
          </div>

          <label>Categoria</label>
          <b-form-select v-model="category" :options="options"></b-form-select>

        </div>

        <div class="p-2">
          <b-button variant="success" class="float-left" @click="store">Salvar</b-button>
          <b-button variant="light" class="float-right" @click="hide">Cancelar</b-button>
        </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "MovieModal",
  data: () => ({
    title: null,
    subtitle: null,
    category: 0,
    options: [
      { value: 0, text: 'Selecione..' },
      { value: 'ACAO', text: 'Ação' },
      { value: 'FICAO', text: 'Ficção' },
      { value: 'DRAMA', text: 'Drama' },
      { value: 'TERROR', text: 'Terror' },
      { value: 'COMEDIA', text: 'Comédia' }
    ]
  }),
  methods: {
    ...mapActions(['setStoreMovie']),

    store() {
       if (!this.title) {
         alert("Qual o título?")
         return
       }

      if (!this.subtitle) {
        alert("Qual o subtítulo?")
        return
      }

       if (!this.category) {
         alert("Qual a categoria?")
         return
       }

       let obj = {
         title:     this.title,
         subtitle:  this.subtitle,
         category:  this.category
       }
       this.setStoreMovie(obj)

      this.hide()
    },

    hide() {
      this.$bvModal.hide('movie-store')
      this.clear()
    },

    clear() {
      this.title    = null
      this.subtitle = null
      this.category = 0

    }
  }
}
</script>

<style scoped>

</style>