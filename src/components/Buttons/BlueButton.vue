<template>
    <universal-button
            button-text="Отправить сообщение"
            button-classes="btn btn-default submit-btn form_submit"
            button-type="button"
            />
</template>

<script>
    import UniversalButton from "@/components/Buttons/UniversalButton";
    export default {
        name: "BlueButton",
        components: {UniversalButton}
    }
</script>

<style scoped>

</style>