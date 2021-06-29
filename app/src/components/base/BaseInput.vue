<template>
        <input 
        :class="inputClass" 
        :value="value" 
        :id="name" 
        :placeholder="placeholder" 
        v-bind="$attrs" 
        />
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
// import TargetsObject from '../../types/interfaces/TargetsObject'

   

export default defineComponent({
    inheritAttrs: false,
    props: {
        value:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required:true
        },
        placeholder:{
            type: String,
            required:true
        },
        inputClass:{
            type: String,
            required:false
        }
    },
    computed: {
        listeners(){
            return {
                ...this.$listeners,
                input:(event)=> this.$emit("input" , event.target.value)
            }
        }
    }
    })
</script>

