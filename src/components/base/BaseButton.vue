<template lang="pug">
button.button(:type="props.type", v-bind="{...attrs }")
  slot
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props, { attrs }) {
    return {
      props,
      attrs
    };
  }
};
</script>

<style lang="scss" scoped>
@use "../../scss/abstracts/extends";

.button {
  @extend %font-reset;
  border: none;
  padding: 1em 2em;
  outline: none;

  &--round {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
