<template>
    <section>
        <button
                v-on:click="show()"
                :type="buttonType"
                :style="buttonStyle"
                :class="buttonClasses"
        >
            {{buttonText}}
        </button>

    </section>
</template>

<script>
    export default {
        name: "UniversalButton",
        components: {},
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
            },
        },
        methods: {
            show() {
                this.$modal.show("feedbackModal");
            }
        }
    }
</script>

<style scoped>

</style>