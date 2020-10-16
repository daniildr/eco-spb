<template>
    <ul class="top-menu">
        <li><a href="#HOME" v-smooth-scroll>ГЛАВНАЯ</a></li>
        <li><a href="#ABOUT" v-smooth-scroll>О НАС </a></li>
        <li><a href="#CARPARK" v-smooth-scroll>АВТОПАРК</a></li>
        <li><a href="#PRICE" v-smooth-scroll>ПРАЙС-ЛИСТ</a></li>
        <li><a href="#CONTACT" v-smooth-scroll>КОНТАКТЫ</a></li>
    </ul>
</template>

<script>
    import json from '@/assets/price.json'

    export default {
        name: "TopMenu",
        components: {
        },
        data() {
            return{
                config : json
            }
        }
    }
</script>

<style scoped>

</style>