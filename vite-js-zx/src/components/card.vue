<template>
    <div style="border:1px solid #ddd">
        <slot/>
        <hr/>
        <slot name="header"/>
         <slot name="main"/>
         <slot name="footer"/>
    </div>
</template>

<script>


export default {


    props: {




    },


    emits: ['update:modelValue'],


    data() {


        return {





        }


    },


    methods: {


    }

}
</script>

<style scoped></style>