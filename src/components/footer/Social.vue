<template>
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-4 left-text mobile-st"><a v-bind:href="'callto:' + config.RuNumber"><i class="fa fa-phone"></i><strong>&nbsp;{{ config.RuNumber }}</strong></a></div>
            <div class="col-md-4 center-text center-block mobile-st"><p style="font-size: 11px;">Уважаемые посетители сайта, обращаем Ваше внимание на то, что информация, размещенная на сайте,
                носит исключительно информационно-рекламный характер, и не является офертой или публичной офертой
                в соответствии со статьей 435 и пунктом 2 статьи 437 Гражданского кодекса Российской Федерации.</p></div>
            <div class="col-md-4 right-text mobile-st">
                <a href="#HOME">
                    <i class="fa fa-arrow-up" title="Вверх"> Вернуться наверх</i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import json from "@/assets/price.json";

    export default {
        name: "Social",
        data() {
            return{
                config : json
            }
        }
    }
</script>

<style scoped>
    a {
        color: #FFFFFF;
        font-size: 150%;
        font-family: "Roboto", sans-serif;
    }
    a:hover {
        color: #84c225;
        ;
    }
    @media (max-width: 1199px){
        .mobile-st{
            text-align: center;
            margin-bottom: 15px;
            margin-top: 15px;
        }
    }
</style>