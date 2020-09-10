<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="flex-start">
                    <div class="top-menu-blok">
                        <ul id="menu" class="top-menu">
                            <li><a href="#ABOUT">О нас</a></li>
                            <li><a href="#PRICE">Прайс-лист</a></li>
                            <li><a href="#CONTACT">Контакты</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
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