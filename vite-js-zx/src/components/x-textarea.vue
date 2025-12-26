<template>
    <label>
        <div>{{label}}</div>
        <textarea type="text" :value="modelValue" @input="onInput" :rows="rows"></textarea>
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
            },
            rows: {

                type: Number,

                default: 3

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