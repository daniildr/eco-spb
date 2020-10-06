<template>
    <section>
        <button v-on:click="show()" v-bind:type="buttonType" v-bind:style="buttonStyle" v-bind:class="buttonClasses">{{buttonText}}</button>
        <Feedback
                v-bind:user-message="userMessage"
        />
    </section>
</template>

<script>
    import Feedback from "@/components/modals/Feedback";

    export default {
        name: "UniversalButton",
        components: {Feedback},
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
                this.$modal.show('my-first-modal', {"tst": "123124"}, {"tst": "123124"});
            }
        }
    }
</script>

<style scoped>

</style>