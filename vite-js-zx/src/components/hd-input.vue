<template>
<input type="text" :value="modelValue" @input="change"/>
{{ inputValue }}
</template>

<script>
export default {
    props:{
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            inputValue: this.modelValue
        }
    },
    methods: {



        change(e) {


            this.inputValue = e.target.value;
            this.$emit('update:modelValue', e.target.value)



        }



    }
}

</script>

<style scoped>

</style>