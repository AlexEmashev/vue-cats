<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="/cat_logo.svg"> <h1>Vue Cats</h1>
      </div>
      <div class="nav" id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/favorites">Favorites</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <article class="content">
    <router-view/>
    </article>
    <footer class="footer">
      <span class="footer-info">
        This project is provided under The MIT License. Copyright 2019 <a href="https://github.com/AlexEmashev">Alexander&nbsp;Emashev</a>.
      </span>
    </footer>
  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "App",
  store,
  created() {
    store.commit("getSavedFavorites");
  }
}
</script>

<style lang="scss">
@import "../styles/style.scss";

// Main classes
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: $break-sm) {
    padding: 0 2rem;
  }
}

.header {
  display: flex;
  flex: 0;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin-top: .5rem;
  @media (min-width: $break-sm) {
    margin-top: 0;
    flex-direction: row;
  }
}

.logo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  // min-width: 100%;
  @media (min-width: $break-sm) {
    position: absolute;
  }
  img {
    width: 60px;
    height: 60px;
  }
  h1 {
    color: $fg-color;
    font-size: 30px;
    font-weight: lighter;
    margin: auto 10px;
  }
}

#nav {
  min-width: 100%;
    padding: .3rem 0 1rem 0;
  @media (min-width: $break-sm) {
    padding: 30px 0;
  }
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
  width: 100%;
  flex: 1 1 auto;
}
.btn {
  color: darken($font-color-active, 15%);
  background: darken($bg-color, 5%);
  padding: 0;
  margin: 0;
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 45px;
  transition: all .5s cubic-bezier(0, 0.91, 0.22, 1);
  outline: 0;
  &:not(:last-of-type) {
    margin-right: 7px;
  }

  &:disabled, &:disabled:hover {
    cursor: auto;
    .btn-image {
      fill: $font-color-darker;
    }
  }

  .btn-image {
    height: 32px;
    width: 32px;
    fill: darken($font-color-active, 15%);
  }

  &:hover {
    color: $fg-color;
    .btn-image {
      fill: $font-color-active;
    }
  }
  &-primary {
    padding: 7px 22px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 3px solid darken($fg-color, 15%);
    border-radius: $control-border-radius;
    font-size: 28px;
    background: none;
    text-transform: uppercase;
    user-select: none;
    box-shadow: 4px 4px $bg-darker-color;
    &:hover {
      border-color: $fg-color;
      box-shadow: 4px 4px $control-bg-inactive-hover-color;
    }
    &:active {
      background: transparentize($fg-color, .8);
      box-shadow: none;
    }
  }

  &-icon {
    background: none;
    border: none;
    font-size: 0;
    line-height: 0;
  }
}

  .footer {
    padding: 1em;
    font-size: 11px;
    color: $fg-color;
  }

  a {
    color: $fg-color;

  }
</style>
