<template>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand " href="#"><img class="mobile-hidden" src="@/images/for-popup-menu-logo.png" alt="Logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a style="color: #FFFFFF" href="#HOME">ГЛАВНАЯ</a></li>
                    <li><a style="color: #FFFFFF" href="#ABOUT">О НАС </a></li>
                    <li><a style="color: #FFFFFF" href="#CARPARK">АВТОПАРК</a></li>
                    <li><a style="color: #FFFFFF" href="#PRICE">ПРАЙС-ЛИСТ</a></li>
                    <li><a style="color: #FFFFFF" href="#CONTACT">КОНТАКТЫ </a></li>
                    <li><a style="color: #FFFFFF" v-bind:href="'callto:' + config.RuNumber"><i class="fa fa-phone"></i><strong>&nbsp;{{ config.RuNumber }}</strong></a></li>
                </ul>
            </div>
        </div>
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

@media (max-width: 1199px){
    .mobile-hidden{
        height: 50px;
    }
    .navbar-fixed-top, .navbar-fixed-bottom{
        z-index: 999;
    }
}
</style>