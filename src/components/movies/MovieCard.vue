<template>
  <div>
    <b-card
        :title="item.title"
        :sub-title="item.subtitle"
        :img-src="img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
        img-height="200"
    >
      <b-badge variant="dark">{{item.category}}</b-badge>
      <b-button @click="remove" variant="danger" size="sm" class="float-right">Remove</b-button>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "MovieCard",
  props: ['item', 'index'],
  computed: {
    img() {
      switch (this.item.category) {
        case "ACAO": return 'https://1759028l.ha.azioncdn.net/img/2020/10/blog/212138/filmes-acao-aventura-youtube.jpg'
        case "FICCAO": return 'https://blog.morumbishopping.com.br/wp-content/uploads/2018/11/no-limite-de-amanha.jpg'
        case "DRAMA": return 'https://s2.glbimg.com/byviSoq9ig1hFp-nI7ztWWmlDjg=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/03/06/meredithchorando.jpg'
        case "TERROR": return 'https://s2.glbimg.com/6bdF931FVRp14rIwXthH_vsxE8k=/e.glbimg.com/og/ed/f/original/2019/09/05/it-chapter-two-box-office-predictions-.jpg'
        case "COMEDIA": return 'https://relacionamento.waagenciadigital.com.br/files/10/15/blog/45/45_527_as-branquelas.jpg'
        default: return 'https://picsum.photos/600/300/?image=25'
      }
    }
  },
  methods: {
    ...mapActions(['setRemoveMovie']),
    remove() {
      this.setRemoveMovie(this.index)
    }
  }
}
</script>

<style scoped>

</style>