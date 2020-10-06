<template>
    <UniversalButton
            button-classes="btn btn-default green-btn"
            v-bind:button-style="customStyle"
            v-bind:button-text="customText"
            v-bind:user-message="userMessage"
            />
</template>

<script>
    import UniversalButton from "@/components/Buttons/UniversalButton";

    export default {
        name: "GreenButton",
        components: {UniversalButton},
        props:{
            customText: {
                type: String,
                default: "Оставить заявку"
            },
            customStyle: {
                type: String,
                default: "width: 260px; height: 50px;"
            },

            userMessage: String
        }
    }
</script>

<style scoped>

</style>