<template>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="@/images/for-popup-menu-logo.png" alt="Logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#HOME">ГЛАВНАЯ</a></li>
                    <li><a href="#ABOUT">О НАС </a></li>
                    <li><a href="#CARPARK">АВТОПАРК</a></li>
                    <li><a href="#PRICE">ПРАЙС-ЛИСТ</a></li>
                    <li><a href="#CONTACT">КОНТАКТЫ </a></li>
                    <li><a v-bind:href="'callto:' + config.RuNumber"><i class="fa fa-phone"></i><strong>&nbsp;{{ config.RuNumber }}</strong></a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container- -->
    </nav>
</template>

<script>
    import json from "@/assets/price.json";

    export default {
        name: "MainMenu",
        data() {
            return{
                config : json
            }
        }
    }
</script>

<style scoped>

</style>