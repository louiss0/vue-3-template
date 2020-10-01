<template lang="pug">
label(:for="label") {{ capitalizedLabel }}
input(type="text", :value="modelValue", :id="label", v-bind="inputAttrs")
</template>

<script lang="ts">
import { useCapitalize } from "@/utils/hooks";
import { computed, defineComponent } from "vue";
import DOMEvent from "@/utils/types/domEvent";
export default defineComponent({
  inheritAttrs: false,
  props: {
    label: { type: String, required: true },
    modelValue: { type: String, required: true }
  },
  emits: {
    "update:modelValue": (payload: string) => typeof payload === "string"
  },
  setup(props, { attrs, emit }) {
    const capitalizedLabel = computed(() => useCapitalize(props.label));

    const inputAttrs = {
      ...attrs,
      onInput: (event: DOMEvent<HTMLInputElement>) =>
        emit("update:modelValue", event.target.value)
    };

    return {
      inputAttrs,
      capitalizedLabel
    };
  }
});
</script>

<style lang="scss" scoped></style>
