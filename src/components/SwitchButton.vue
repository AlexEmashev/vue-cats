<template>
  <label class="checkbox" v-bind:class="{'checked': value}">
    <input
      class="checkbox-mark"
      type="checkbox"
      :checked="value"
      @input="$emit('input', $event.target.value)"
    >
    <span class="checkbox-label">{{label}}</span>
  </label>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["label", "value"],
  computed: {},
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
@import "../../styles/style.scss";
.checkbox {
  margin-bottom: 3px;
  display: inline-block;
  box-sizing: border-box;
  background: $control-bg-inactive-color;
  border-radius: 10px;
  padding: 3px 8px 3px 6px;
  color: $control-bg-color;
  user-select: none;
  transition: all .3s;
  cursor: pointer;

  :before {
      display: inline-block;
      content: "\25CB";
      font-size: 18px;
      margin-right: 6px;
      width: 11px;
      text-align: center;
    }

  &.checked {
    background-color: $control-bg-color;
    color: $bg-color;
    :before {
      content: "\2A2F";
    }

    &:hover {
      background-color: $fg-color;
    }
  }

  &:not(:last-of-type) {
    margin-right: 3px;
  }

  &-mark {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  &:hover {
    background-color: transparentize($fg-color, $amount: 0.5);
  }
}
</style>