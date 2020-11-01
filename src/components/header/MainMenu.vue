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
                <a class="navbar-brand" id="menuLogo" href="#"><img class="" src="@/images/for-popup-menu-logo.png" alt="Logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a  href="#HOME" v-smooth-scroll>ГЛАВНАЯ</a></li>
                    <li><a  href="#ABOUT" v-smooth-scroll>О НАС </a></li>
                    <li><a  href="#CARPARK" v-smooth-scroll>АВТОПАРК</a></li>
                    <li><a  href="#PRICE" v-smooth-scroll>ПРАЙС-ЛИСТ</a></li>
                    <li><a  href="#CONTACT" v-smooth-scroll>КОНТАКТЫ </a></li>
                    <li><a  v-bind:href="'callto:' + config.RuNumber"><i class="fa fa-phone"></i><strong>&nbsp;{{ config.RuNumber }}</strong></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import json from "@/assets/contacts.json";

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
    #menuLogo{
        height: 50px;
        display: none;
    }

@media (max-width: 767px){
    .mobile-hidden{
        height: 50px;
    }
    .navbar-fixed-top, .navbar-fixed-bottom{
        z-index: 999;
    }
    a {
        font-weight: 600;
        font-size: 120%;
    }
    .navbar-default .navbar-nav > li > a{
        color: #5297c8;
    }
    .navbar-default .navbar-nav > li > a:before,
    .navbar-default .navbar-nav > li > a:hover,
    .navbar-default .navbar-nav > li > a:active{
        color: #84c225;
    }
    .navbar-default .navbar-nav > .active > a,
    .navbar-default .navbar-nav > .active > a:hover,
    .navbar-default .navbar-nav > .active > a:focus{
        color: #84c225;
    }
}
</style>