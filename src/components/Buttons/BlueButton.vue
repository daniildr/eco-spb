<template>
    <universal-button
            button-classes="btn btn-default submit-btn form_submit"
            v-bind:button-style="customStyle"
            v-bind:button-text="customText"
            />
</template>

<script>
    import UniversalButton from "@/components/Buttons/UniversalButton";

    export default {
        name: "BlueButton",
        components: {UniversalButton},
        props:{
            customText: {
                type: String,
                default: "Оставить заявку"
            },
            customStyle: {
                type: String,
                default: "width: 260px; height: 50px;"
            }
        }
    }
</script>

<style scoped>

</style>