<template lang="pug">
teleport(to="#app")
  .backdrop(
    v-show="show",
    :class="{ 'backdrop--show': show }",
    @click.self="closeFunction?.call(closeFunction)"
  )
    transition(name="dialog")
      slot
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    closeFunction: {
      type: Function,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background: var(--backdrop-bg-color, rgba(0, 0, 0, 0.6));

  display: var(--backdrop-display, none);
  justify-content: var(--backdrop-justify-content);
  align-items: var(--backdrop-align-items);
  &--show {
    --backdrop-display: flex;
    --backdrop-justify-content: center;
    --backdrop-align-items: center;
  }
}

.modal {
  position: absolute;
  z-index: var(--modal-z-index, 20000);
  width: var(--modal-width);
  height: var(--modal-height);
  padding: var(--modal-padding);
  transition: var(
    --modal-transition,
    opacity 500ms ease-in,
    transform 500ms ease-in
  );
  display: var(--modal-display, flex);
  justify-content: var(--modal-justify-content);
  align-items: var(--modal-align-items);
  grid-template-columns: var(--modal-grid-template-columns);
  grid-template-rows: var(--modal-grid-template-rows);
  border: var(--modal-border);

  background: var(--modal-background-color);
}
</style>
