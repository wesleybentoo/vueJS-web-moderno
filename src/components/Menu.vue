<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light pl-5 pr-5">
      <b-navbar-brand href="#">
        <img alt="Vue logo" src="../assets/logo.png" width="50">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/" active-class="active" exact>Início</router-link>
          <router-link class="nav-link" to="/about" active-class="active" exact>Sobre</router-link>
          <router-link class="nav-link" to="/movies" active-class="active" exact >Filmes</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>