<template>
    <ul id="menu" class="top-menu">
        <li><a href="#HOME">ГЛАВНАЯ</a></li>
        <li><a href="#ABOUT">О НАС </a></li>
        <li><a href="#CARPARK">АВТОПАРК</a></li>
        <li><a href="#PRICE">ПРАЙС-ЛИСТ</a></li>
        <li><a href="#CONTACT">КОНТАКТЫ</a></li>
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