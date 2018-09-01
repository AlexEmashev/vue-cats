<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favorites</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <article class="content">
    <router-view/>
    </article>
  </div>
</template>

<style lang="scss">
$font-color: #000;
$font-color-active: #fff;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $font-color;
    &.router-link-exact-active {
      color: $font-color-active;
    }
  }
}
.content {
  display: block;
  margin: 0 auto;
  max-width: 640px;
}
</style>
