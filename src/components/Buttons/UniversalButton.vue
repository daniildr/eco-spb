<template>
    <button v-bind:type="buttonType" v-bind:style="buttonStyle" v-bind:class="buttonClasses">{{buttonText}}</button>
</template>

<script>
    export default {
        name: "UniversalButton",
        props: {
            buttonText: {
                type: String,
                default: "Заказать звонок"
            },
            buttonClasses: {
                type: String,
                required: true
            },
            buttonStyle: {
                type: String,
                default: ""
            },
            buttonType: {
                type: String,
                default: "button"
            }
        }
    }
</script>

<style scoped>

</style>