<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
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
$bg-color: #ff5926;
$fg-color: #fff;
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
.btn {
  background: darken($bg-color, 5%);
  font-weight: 100;
  color: $fg-color;
  cursor: pointer;
  width: 100%;
  max-width: 160px;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid $fg-color;
  font-size: 16px;
  line-height: 45px;
  transition: all .5s cubic-bezier(0, 0.91, 0.22, 1);

  &:hover {
    font-weight: 600;
    letter-spacing: 2px;
  }
}

</style>
