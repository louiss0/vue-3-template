<template>
<router-view />
</template>

<script lang="ts">
import { defineComponent, } from "vue"

export default defineComponent({
  name: 'App',
})
</script>

<style>
@import "tailwindcss/base";

@import "./css/base.css";

@import "tailwindcss/components";

@import "./css/components.css";

@import "tailwindcss/utilities";

@import "./css/utilities.css";

</style>
