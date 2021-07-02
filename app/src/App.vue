<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent,  onMounted, provide, } from "vue"
import useTokenAuth from "./composables/useTokenAuth"
import InjectionKeys from "./types/InjectionKeys"



export default defineComponent({
  name: 'App', 

  setup(){
        
        const  { 
         autoLoginIfTokenExistsAndIsNotExpired, 
         autoLogoutIfTokenExistsButTheExpirationDateIsLessThanNow 
         }= useTokenAuth()

      autoLogoutIfTokenExistsButTheExpirationDateIsLessThanNow()

        onMounted(()=> {

            autoLoginIfTokenExistsAndIsNotExpired()

        })

        provide(InjectionKeys.useTokenAuthKey, useTokenAuth)


  }
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
