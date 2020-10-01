<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<style lang="scss">
@forward "./scss/abstracts/animations";
@forward "./scss/abstracts/extends";
@forward "./scss/abstracts/mixins";
@forward "./scss/abstracts/variables";

@forward "./scss/base/reset";
@forward "./scss/base/typography";
@forward "./scss/base/utilities";

@forward "./scss/themes/dark";
@forward "./scss/vendors";
</style>

<script lang="ts"></script>
