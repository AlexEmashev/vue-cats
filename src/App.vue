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
@import "../styles/style.scss";

// Main classes
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
    border-radius: 7px;
    font-size: 28px;
    background: none;
    text-transform: uppercase;
    user-select: none;
    &:hover {
      border-color: $fg-color
    }
    &:active {
      background: transparentize($fg-color, .8);
    }
  }

  &-icon {
    background: none;
    border: none;
    font-size: 0;
    line-height: 0;
  }
}
</style>
