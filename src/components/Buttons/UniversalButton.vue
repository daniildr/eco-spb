<template>
    <section>
        <button v-on:click="show()" v-bind:type="buttonType" v-bind:style="buttonStyle" v-bind:class="buttonClasses">{{buttonText}}</button>

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

            userMessage: String
        },
        methods: {
            show() {
                this.$modal.show('feedbackModal');
            }
        }
    }
</script>

<style scoped>

</style>