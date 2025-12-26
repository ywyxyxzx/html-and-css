<template>
    <label>
        <div>{{label}}</div>
        <input type="text" :value="modelValue" @input="onInput">
    </label>

</template>

<script>
    export default {
        inject: ['provalue'],
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: String,
                default: ''
            }
        },
         emits: ['update:modelValue'],
        methods: {
            onInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style scoped>
    label {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 10px;
    }
    label > div {
        margin-right: 5px;
    }
    label > input {
        border:2px solid #ccc;
    }
</style>